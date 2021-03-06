const { BigQuery } = require('@google-cloud/bigquery')

const runUdf = async (client, returnType, js, params = '', input = '') => {
  const query = `
CREATE TEMP FUNCTION testFunction(${params})
  RETURNS ${returnType}
    LANGUAGE js
    OPTIONS (
      library=["gs://${process.env.DEST_BUCKET}/bigquery-js-udf-example/dist/dist.js"]
    )
    AS r"""
      ${js}
    """
;

SELECT testFunction(${input}) AS result;`
  const [job] = await client.createQueryJob({
    query
  })
  const [rows] = await job.getQueryResults()
  return rows[0].result
}

describe('BigQuery tests', () => {
  let bigquery

  beforeAll(() => {
    bigquery = new BigQuery({
      projectId: process.env.GCP_PROJECT_ID
    })
  })

  it('typeExamples.boolean()', async () => {
    const result = await runUdf(bigquery, 'BOOLEAN', 'return typeExamples.boolean();')
    expect(result).toBe(true)
  })

  it('typeExamples.arrayOfStrings()', async () => {
    const result = await runUdf(bigquery, 'ARRAY<STRING>', 'return typeExamples.arrayOfStrings();')
    expect(result).toStrictEqual(['one', 'two', 'three'])
  })

  it('typeExamples.object()', async () => {
    const result = await runUdf(bigquery, 'STRUCT<one INT64, two INT64, three INT64>', 'return typeExamples.object();')
    expect(result).toStrictEqual({
      one: 1,
      two: 2,
      three: 3
    })
  })

  it('typeExamples.arrayOfObjects()', async () => {
    const result = await runUdf(bigquery, 'ARRAY<STRUCT<one INT64, two INT64, three INT64>>', 'return typeExamples.arrayOfObjects();')
    expect(result).toStrictEqual([
      { one: 1, two: 2, three: 3 },
      { one: 1, two: 2, three: 3 }
    ])
  })

  it('echo()', async () => {
    const result = await runUdf(bigquery, 'STRING', 'return echo(word);', 'word STRING', '"echo"')
    expect(result).toBe('echo')
  })

  it('sillyName()', async () => {
    const result = await runUdf(bigquery, 'STRING', 'return sillyName();')
    expect(result).toMatch(/^\w+ \w+$/)
  })
})

const { BigQuery } = require('@google-cloud/bigquery')

describe('BigQuery tests', () => {
  let bigquery

  beforeAll(() => {
    bigquery = new BigQuery({
      projectId: process.env.GCP_PROJECT_ID
    })
  })

  it('works', async () => {
    const query = 'SELECT 1 AS result;'
    const options = {
      query
    }
    const [job] = await bigquery.createQueryJob(options)
    const [rows] = await job.getQueryResults()
    expect(rows[0].result).toBe(1)
  })
})

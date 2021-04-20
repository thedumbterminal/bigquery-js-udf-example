const index = require('./index')

describe('test index', () => {
  describe('echo()', () => {
    it('returns input string', () => {
      expect(index.echo('echo')).toBe('echo')
    })
  })

  describe('sillyName()', () => {
    it('returns string with two words', () => {
      expect(index.sillyName()).toMatch(/^\w+ \w+$/)
    })
  })
})

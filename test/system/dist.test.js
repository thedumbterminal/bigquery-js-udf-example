require('../../dist/dist')

describe('dist', () => {
  describe('typeExamples', () => {
    describe('boolean()', () => {
      it('returns true', () => {
        expect(global.typeExamples.boolean()).toBe(true)
      })
    })
  })
  describe('helloWorld()', () => {
    it('retruns the greeting', () => {
      expect(global.helloWorld()).toBe('Hello World!')
    })
  })
})

const typeExamples = require('./typeExamples')

describe('type examples', () => {
  describe('boolean()', () => {
    it('returns a boolean', () => {
      expect(typeExamples.boolean()).toBe(true)
    })
  })

  describe('arrayOfStrings()', () => {
    it('returns an array of strings', () => {
      expect(typeExamples.arrayOfStrings()).toStrictEqual(['one', 'two', 'three'])
    })
  })

  describe('object()', () => {
    it('returns an object', () => {
      expect(typeExamples.object()).toStrictEqual({
        one: 1,
        two: 2,
        three: 3
      })
    })
  })

  describe('arrayOfObjects()', () => {
    it('returns an array of objects', () => {
      expect(typeExamples.arrayOfObjects()).toStrictEqual([
        { one: 1, two: 2, three: 3 },
        { one: 1, two: 2, three: 3 }
      ])
    })
  })
})

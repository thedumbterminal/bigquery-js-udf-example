const typeExamples = module.exports = {}

typeExamples.boolean = () => true

typeExamples.arrayOfStrings = () => ['one', 'two', 'three']

typeExamples.object = () => {
  return {
    one: 1,
    two: 2,
    three: 3
  }
}

typeExamples.arrayOfObjects = () => [
  { one: 1, two: 2, three: 3 },
  { one: 1, two: 2, three: 3 }
]

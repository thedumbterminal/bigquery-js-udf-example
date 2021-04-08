const typeExamples = require('./typeExamples')

const index = module.exports = {}

index.typeExamples = typeExamples
index.helloWorld = () => 'Hello World!'
index.echo = (input) => input

// Put functionality you need in the global scope for BiqQuery usage
Object.assign(global, index)

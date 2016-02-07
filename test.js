var konsole = require('./index.js')(console)
var assert = require('assert')
var n = konsole.nice

function add (a, b) {
  return a + b
}

function remove (a, b) {
  return a - b
}

console.log('Test Output:')
var results = add(
  n(remove(10, 5), '10 - 5'),
  n(remove(10, 7), '10 - 7')
)

n(results, '(10 - 5) + (10 - 7)')

console.log('</Test Output>\n\n')

console.log('Unit tests:')
var adding_results = n(add(1, 1), '1 + 1')
assert.strictEqual(adding_results, 2)

assert.strictEqual(results, 8)

var creating_object = n({}, '{}')
assert.deepEqual(creating_object, {})

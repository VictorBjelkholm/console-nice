var konsole = require('./index.js')(console)
var n = konsole.nice

function add (a, b) {
  return a + b
}

function remove (a, b) {
  return a - b
}

var results = n(add(n(remove(10, 5), '10 - 5'), n(remove(10, 7), '10 - 7')), '(10 - 5) + (10 - 7)')
n(results, 'results')

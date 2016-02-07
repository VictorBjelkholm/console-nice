## console.nice('sweet!')

`console.nice` is a development utility. It's almost identical to `console.log` but instead of returning `undefined`, it returns the value passed into it (+ logging it).

## Usage

Input:
```javascript
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
```

Output:
```
10 - 5 = 5
10 - 7 = 3
(10 - 5) + (10 - 7) = 8
results = 8
```

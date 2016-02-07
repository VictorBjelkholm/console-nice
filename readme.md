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

## License

The MIT License (MIT)
Copyright (c) 2016 Victor Bjelkholm

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



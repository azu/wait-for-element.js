# wait-for-element.js [![Build Status](https://travis-ci.org/azu/wait-for-element.js.svg?branch=master)](https://travis-ci.org/azu/wait-for-element.js)

This library provide a function which wait until an element is visible.

## Installation

    npm install wait-for-element.js

### Dependency

- Promise API

if you use it with non promise support browser, should load Promise polyfill like [ES6-Promise](https://github.com/jakearchibald/es6-promise "ES6-Promise").

## Usage

For details, please see [Example](example/).

```js
/**
 * Wait until an element that is matched the selector is visible.
 * @param {string} selector the css selector
 * @param {number} timeout the timeout is millisecond. default:2000ms
 * @returns {Promise}
 */
var waitForElement = require("wait-for-element");
waitForElement("#js-element").then(function (element) {
    alert("Found #js-element");
}).catch(console.error.bind(console));
```


## Tests

    npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT
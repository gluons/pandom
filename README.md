# Pandom
[![license](https://img.shields.io/github/license/gluons/pandom.svg?style=flat-square)](https://github.com/gluons/pandom/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/pandom.svg?style=flat-square)](https://www.npmjs.com/package/pandom)
[![npm](https://img.shields.io/npm/dt/pandom.svg?style=flat-square)](https://www.npmjs.com/package/pandom)
[![Travis](https://img.shields.io/travis/gluons/pandom.svg?style=flat-square)](https://travis-ci.org/gluons/pandom)

🔀 Randomize a primitive/built-in data type in JavaScript.

<br>
**🚧 WIP**
<br>

## Install
Install via [NPM](https://www.npmjs.com/):
```
npm install pandom
```

## Usage
```javascript
require('pandom');
```

## API
### String.prototype.random(length)
Randomize a string from the original string.

#### length
Type: `Number`  
Default: _Same length as original string length._

Length of a randomized string.

```javascript
let str = 'string';
str.random(); // e.g. 'intrgt'
```

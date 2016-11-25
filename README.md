# Pandom
🔀 Randomize a primitive/built-in data type in JavaScript.

🚧 WIP

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

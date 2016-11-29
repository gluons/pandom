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

[![NPM](https://nodei.co/npm/pandom.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/pandom)

```
npm install pandom
```

## Usage
Just require **pandom** before use it.
```javascript
require('pandom');
```

## API

### Array.prototype.random(length)
Randomize an array from the original array.

#### length
Type: `Number`  
Default: _Same length as original array length._

Length of a randomized array.

> If no length, it'll return a randomized array with same length as the original array.

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr.random()); // [5, 3, 2, 4, 4]
```

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr.random(10)); // [5, 2, 1, 4, 5, 3, 5, 2, 3, 3]
```

### Array.prototype.shuffle()
Shuffle the original array. **(Doesn't change the original array)**

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr.shuffle()); // [1, 4, 5, 3, 2]
```

### String.prototype.random(length)
Randomize a string from the original string.

#### length
Type: `Number`  
Default: _Same length as original string length._

Length of a randomized string.

> If no length, it'll return a randomized string with same length as the original string.

```javascript
let str = 'string';
console.log(str.random()); // 'intrgt'
```

```javascript
let str = 'string';
console.log(str.random(20)); // 'gngrtsttrrginginrntg'
```

### String.prototype.shuffle()
Shuffle the original string.

```javascript
let str = 'string';
console.log(str.shuffle()); // 'rgntsi'
```

### Number.prototype.randomTo(end)
Get a random number between **the current number** and `end`.

#### end
Type: `Number`

The ending boundary.

```javascript
let n = 0;
console.log(n.randomTo(5)); // 4.728512016075024
```

### Number.prototype.randomFrom(start)
Get a random number between `start` and **the current number**.

#### start
Type: `Number`

The beginning boundary.

```javascript
let n = 0;
console.log(n.randomTo(5)); // 3.927804381475524
```

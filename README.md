# Pandom
[![license](https://img.shields.io/github/license/gluons/pandom.svg?style=flat-square)](/blob/master/LICENSE)
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

**Table of Contents**
- Array
  - [`Array.prototype.random(length)`](#arrayprototyperandomlength)
  - [`Array.prototype.shuffle()`](#arrayprototypeshuffle)
- String
  - [`String.prototype.random(length)`](#stringprototyperandomlength)
  - [`String.prototype.shuffle()`](#stringprototypeshuffle)
- Number
  - [`Number.prototype.randomTo(end)`](#numberprototyperandomtoend)
  - [`Number.prototype.randomFrom(start)`](#numberprototyperandomfromstart)
- Date
  - [`Date.prototype.randomHours()`](#dateprototyperandomhours)
  - [`Date.prototype.randomMinutes()`](#dateprototyperandomminutes)
  - [`Date.prototype.randomSeconds()`](#dateprototyperandomseconds)
  - [`Date.prototype.randomMilliseconds()`](#dateprototyperandommilliseconds)
  - [`Date.prototype.randomDate()`](#dateprototyperandomdate)
  - [`Date.prototype.randomMonth()`](#dateprototyperandommonth)
  - [`Date.prototype.randomYear()`](#dateprototyperandomyear)
  - [`Date.prototype.random([...targets])`](#dateprototyperandomtargets)

---

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

---

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

---

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

---

### Date.prototype.randomHours([min, max])
Return a date with randomized **hours** (within `min` and `max` if given).

#### min
Type: `Number`

Minimum boundary.

#### max
Type: `Number`

Maximum boundary

```javascript
let date = new Date(2016, 0, 1, 5, 15, 20, 50); // Fri 1 Jan 2016 05:15:20:50
let newDate = date.randomHours();

console.log(newDate.toString()); // -> Fri 1 Jan 2016 09:15:20:50
```

### Date.prototype.randomMinutes([min, max])
Return a date with randomized **minutes** (within `min` and `max` if given).

#### min
Type: `Number`

Minimum boundary.

#### max
Type: `Number`

Maximum boundary

```javascript
let date = new Date(2016, 0, 1, 5, 15, 20, 50); // Fri 1 Jan 2016 05:15:20:50
let newDate = date.randomMinutes();

console.log(newDate.toString()); // -> Fri 1 Jan 2016 05:58:20:50
```

### Date.prototype.randomSeconds([min, max])
Return a date with randomized **seconds** (within `min` and `max` if given).

#### min
Type: `Number`

Minimum boundary.

#### max
Type: `Number`

Maximum boundary

```javascript
let date = new Date(2016, 0, 1, 5, 15, 20, 50); // Fri 1 Jan 2016 05:15:20:50
let newDate = date.randomSeconds();

console.log(newDate.toString()); // -> Fri 1 Jan 2016 05:15:47:50
```

### Date.prototype.randomMilliseconds([min, max])
Return a date with randomized **milliseconds** (within `min` and `max` if given).

#### min
Type: `Number`

Minimum boundary.

#### max
Type: `Number`

Maximum boundary

```javascript
let date = new Date(2016, 0, 1, 5, 15, 20, 50); // Fri 1 Jan 2016 05:15:20:50
let newDate = date.randomMilliseconds();

console.log(newDate.toString()); // -> Fri 1 Jan 2016 05:15:20:316
```

### Date.prototype.randomDate([min, max])
Return a date with randomized **date** (within `min` and `max` if given).

#### min
Type: `Number`

Minimum boundary.

#### max
Type: `Number`

Maximum boundary

```javascript
let date = new Date(2016, 0, 1, 5, 15, 20, 50); // Fri 1 Jan 2016 05:15:20:50
let newDate = date.randomDate();

console.log(newDate.toString()); // -> Mon 18 Jan 2016 05:15:20:50
```

### Date.prototype.randomMonth([min, max])
Return a date with randomized **month** (within `min` and `max` if given).

#### min
Type: `Number`

Minimum boundary.

#### max
Type: `Number`

Maximum boundary

```javascript
let date = new Date(2016, 0, 1, 5, 15, 20, 50); // Fri 1 Jan 2016 05:15:20:50
let newDate = date.randomMonth();

console.log(newDate.toString()); // -> Thu 1 Sep 2016 05:15:20:50
```

### Date.prototype.randomYear([min, max])
Return a date with randomized **year** (within `min` and `max` if given).

> Randomize year will be within `1970` and `275760` (maximum year in JavaScript - see http://stackoverflow.com/a/11526569/1675907).

#### min
Type: `Number`

Minimum boundary.

#### max
Type: `Number`

Maximum boundary

```javascript
let date = new Date(2016, 0, 1, 5, 15, 20, 50); // Fri 1 Jan 2016 05:15:20:50
let newDate = date.randomYear();

console.log(newDate.toString()); // -> Mon 1 Jan 61134 05:15:20:50
```

### Date.prototype.random([...targets])
Return a date with randomized whole date that can be determined the precision by `targets`.

```javascript
let date = new Date(2016, 0, 1, 5, 15, 20, 50); // Fri 1 Jan 2016 05:15:20:50
let newDate = date.random('hour', 'date', 'month');

console.log(newDate.toString()); // -> Wed 21 Dec 2016 10:15:20:50
```

If no `targets` given, it'll return a date between `new Date(0)` and `new Date(8640000000000000)` (maximum date in JavaScript - see http://stackoverflow.com/a/11526569/1675907).

```javascript
let date = new Date(2016, 0, 1, 5, 15, 20, 50); // Fri 1 Jan 2016 05:15:20:50
let newDate = date.random();

console.log(newDate.toString()); // -> Wed 13 May 152458 09:58:28:825
```

#### With range

`targets` can be objects with `min` and `max` range. And give a `target` as property in the object.

##### target
Type: `String`

A target to be randomized. Use to determine the precision.

##### min
Type: `Number`

Minimum boundary.

##### max
Type: `Number`

Maximum boundary

```javascript
let date = new Date(2016, 0, 1, 5, 15, 20, 50); // Fri 1 Jan 2016 05:15:20:50
let newDate = date.random(
	{ target: 'hour', min: 8, max: 12 },
	{ target: 'date', min: 10, max: 20 },
	{ target: 'month', min: 5, max: 8 }
);

console.log(newDate.toString()); // -> Thu 11 Aug 2016 08:15:20:50
```

'use strict';

const Random = require('random-js');
const monthDays = require('month-days');
const nvl = require('nvl');

const dateLib = require('./lib/date');

const MAX_DATE = dateLib.MAX_DATE;
const MAX_YEAR = dateLib.MAX_YEAR;

/**
 * Create randomization engine.
 * @return {Engine} Random.js engine
 */
function eng() {
	let engine = Random.engines.mt19937();
	engine.autoSeed();
	return engine;
}

/**
 * Ensure random value.
 * @param  {Number} min Minimum number
 * @param  {Number} max Maximum number
 * @param  {Number} old Old number
 * @return {Number}     New random number
 */
function ensureRand(min, max, old) {
	let rand = Random.integer(min, max)(eng());
	while (rand == old) {
		rand = Random.integer(min, max)(eng());
	}
	return rand;
}

let dClone = dateLib.dateClone;
let dRandF = dateLib.dateRandomFunc;

/*
	Array
*/
/**
 * Randomize an array from the original array.
 * @param  {Number} length Length of a randomized array
 * @return {Array}         Randomized array
 */
Array.prototype.random = function (length) {
	if (typeof length !== 'number') {
		length = this.length;
	}
	let newArray = [];
	for (let i = 0; i < length; i++) {
		let item = Random.picker(this)(eng());
		newArray.push(item);
	}
	return newArray;
};

/**
 * Shuffle the original array. (Doesn't change the original array)
 * @return {Array} Shuffled array
 */
Array.prototype.shuffle = function () {
	let oldArray = this.slice(0);
	let newArray = [];
	while (oldArray.length > 0) {
		let item = Random.picker(oldArray)(eng());
		let index = oldArray.indexOf(item);
		oldArray.splice(index, 1);
		newArray.push(item);
	}
	return newArray;
};

/*
	String
*/
/**
 * Randomize a string from the original string.
 * @param  {Number} length Length of a randomized string
 * @return {String}        Randomized string
 */
String.prototype.random = function (length) {
	if (typeof length !== 'number') {
		length = this.length;
	}
	return Random.string(this)(eng(), length);
};

/**
 * Shuffle the original string.
 * @return {String} Shuffled string
 */
String.prototype.shuffle = function () {
	let strArr = Array.from(this);
	return strArr.shuffle().join('');
};

/*
	Number
*/
/**
 * Get a random number between the current number and end.
 * @param  {Number} end The ending boundary
 * @return {Number}     A random number within range
 */
Number.prototype.randomTo = function (end) {
	return Random.real(this, end, true)(eng());
};

/**
 * Get a random number between start and the current number.
 * @param  {Number} start The beginning boundary
 * @return {Number}       A random number within range
 */
Number.prototype.randomFrom = function (start) {
	return Random.real(start, this, true)(eng());
};

/*
	Date
*/
/**
 * Return a date with randomized hours.
 * @return {Date} A date with randomized hours
 */
Date.prototype.randomHours = function (min, max) {
	min = nvl(min, 0);
	max = nvl(max, 23);
	let newDate = dClone(this);
	newDate.setHours(ensureRand(min, max, this.getHours()));
	return newDate;
};

/**
 * Return a date with randomized minutes.
 * @return {Date} A date with randomized minutes
 */
Date.prototype.randomMinutes = function (min, max) {
	min = nvl(min, 0);
	max = nvl(max, 59);
	let newDate = dClone(this);
	newDate.setMinutes(ensureRand(min, max, this.getMinutes()));
	return newDate;
};

/**
 * Return a date with randomized seconds.
 * @return {Date} A date with randomized seconds
 */
Date.prototype.randomSeconds = function (min, max) {
	min = nvl(min, 0);
	max = nvl(max, 59);
	let newDate = dClone(this);
	newDate.setSeconds(ensureRand(min, max, this.getSeconds()));
	return newDate;
};

/**
 * Return a date with randomized milliseconds.
 * @return {Date} A date with randomized milliseconds
 */
Date.prototype.randomMilliseconds = function (min, max) {
	min = nvl(min, 0);
	max = nvl(max, 999);
	let newDate = dClone(this);
	newDate.setMilliseconds(ensureRand(min, max, this.getMilliseconds()));
	return newDate;
};

/**
 * Return a date with randomized date.
 * @return {Date} A date with randomized date
 */
Date.prototype.randomDate = function (min, max) {
	let lastDate = monthDays(this.getMonth(), this.getFullYear());
	min = nvl(min, 1);
	max = nvl(max, lastDate);
	let newDate = dClone(this);
	newDate.setDate(ensureRand(min, max, this.getDate()));
	return newDate;
};

/**
 * Return a date with randomized month.
 * @return {Date} A date with randomized month
 */
Date.prototype.randomMonth = function (min, max) {
	min = nvl(min, 0);
	max = nvl(max, 11);
	let newDate = dClone(this);
	newDate.setMonth(ensureRand(min, max, this.getMonth()));
	return newDate;
};

/**
 * Return a date with randomized year.
 * @return {Date} A date with randomized year
 */
Date.prototype.randomYear = function (min, max) {
	min = nvl(min, 1970);
	max = nvl(max, MAX_YEAR);
	let newDate = dClone(this);
	newDate.setFullYear(ensureRand(min, max, this.getFullYear()));
	return newDate;
};

/**
 * Return a date with randomized whole date that can be determined the precision by targets.
 * @param {...String} targets The precision to determine which part of date will be randomize
 * @return {Date}             A randomized date
 */
Date.prototype.random = function () {
	if (arguments.length > 0) {
		let newDate = dClone(this);
		for (let i = 0; i < arguments.length; i++) {
			let target = arguments[i];
			if (typeof target === 'string') {
				let randFunc = dRandF(target);
				if (typeof randFunc === 'function') {
					newDate = randFunc.call(newDate);
				}
			}
		}
		return newDate;
	} else {
		return Random.date(new Date(0), MAX_DATE)(eng());
	}
};

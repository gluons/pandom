'use strict';

const Random = require('random-js');
const monthDays = require('month-days');

const dateLib = require('./lib/date');

const MAX_DATE = dateLib.MAX_DATE;
const MAX_YEAR = dateLib.MAX_YEAR;

function eng () {
	let engine = Random.engines.mt19937();
	engine.autoSeed();
	return engine;
}

function ensureRand (min, max, old) {
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
String.prototype.random = function (length) {
	if (typeof length !== 'number') {
		length = this.length;
	}
	return Random.string(this)(eng(), length);
};

String.prototype.shuffle = function () {
	let strArr = Array.from(this);
	return strArr.shuffle().join('');
};

/*
	Number
*/
Number.prototype.randomTo = function (end) {
	return Random.real(this, end, true)(eng());
};

Number.prototype.randomFrom = function (start) {
	return Random.real(start, this, true)(eng());
};

/*
	Date
*/
Date.prototype.randomHours = function () {
	let newDate = dClone(this);
	newDate.setHours(ensureRand(0, 23, this.getHours()));
	return newDate;
};

Date.prototype.randomMinutes = function () {
	let newDate = dClone(this);
	newDate.setMinutes(ensureRand(0, 59, this.getMinutes()));
	return newDate;
};

Date.prototype.randomSeconds = function () {
	let newDate = dClone(this);
	newDate.setSeconds(ensureRand(0, 59, this.getSeconds()));
	return newDate;
};

Date.prototype.randomMilliseconds = function () {
	let newDate = dClone(this);
	newDate.setMilliseconds(ensureRand(0, 999, this.getMilliseconds()));
	return newDate;
};

Date.prototype.randomDate = function () {
	let lastDate = monthDays(this.getMonth(), this.getFullYear());
	let newDate = dClone(this);
	newDate.setDate(ensureRand(1, lastDate, this.getDate()));
	return newDate;
};

Date.prototype.randomMonth = function () {
	let newDate = dClone(this);
	newDate.setMonth(ensureRand(0, 11, this.getMonth()));
	return newDate;
};

Date.prototype.randomYear = function () {
	let newDate = dClone(this);
	newDate.setFullYear(ensureRand(1970, MAX_YEAR, this.getFullYear()));
	return newDate;
};

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

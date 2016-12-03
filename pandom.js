'use strict';

const Random = require('random-js');
const monthDays = require('month-days');

/*
	Maximum date is a date with 8640000000000000 milliseconds since 01 January, 1970 UTC.
	So, the max year is 275760. ( From `(new Date(8640000000000000)).getFullYear()` )

	More info -> http://stackoverflow.com/questions/11526504/minimum-and-maximum-date
*/
const MAX_YEAR = 275760;

function eng() {
	let engine = Random.engines.mt19937();
	engine.autoSeed();
	return engine;
}

function dClone (date) {
	return new Date(date.getTime());
}

/*
	Array
*/
Array.prototype.random = function(length) {
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

Number.prototype.randomFrom = function(start) {
	return Random.real(start, this, true)(eng());
};

/*
	Date
*/
Date.prototype.randomHours = function () {
	let newDate = dClone(this);
	newDate.setHours(Random.integer(0, 23)(eng()));
	return newDate;
};

Date.prototype.randomMinutes = function () {
	let newDate = dClone(this);
	newDate.setMinutes(Random.integer(0, 59)(eng()));
	return newDate;
};

Date.prototype.randomSeconds = function () {
	let newDate = dClone(this);
	newDate.setSeconds(Random.integer(0, 59)(eng()));
	return newDate;
};

Date.prototype.randomMilliseconds = function () {
	let newDate = dClone(this);
	newDate.setMilliseconds(Random.integer(0, 999)(eng()));
	return newDate;
};

Date.prototype.randomDate = function () {
	let lastDate = monthDays(this.getMonth(), this.getFullYear());
	let newDate = dClone(this);
	newDate.setDate(Random.integer(1, lastDate)(eng()));
	return newDate;
};

Date.prototype.randomMonth = function () {
	let newDate = dClone(this);
	newDate.setMonth(Random.integer(0, 11)(eng()));
	return newDate;
};

Date.prototype.randomYear = function (maxYear = MAX_YEAR) {
	let newDate = dClone(this);
	newDate.setFullYear(Random.integer(1970, maxYear)(eng()));
	return newDate;
};

'use strict';

require('./pandom');

const test = require('ava');

/*
	Array
*/
test('Array.prototype.random()', t => {
	let arr = [1, 2, 3, 4, 5];
	let randArr = arr.random();
	t.is(randArr.length, arr.length, 'randomized array has same length as original array');
	t.notDeepEqual(randArr, arr, 'randomized array is not equal to original array');
	for (let item of randArr) {
		t.true(randArr.indexOf(item) != -1, `original array has ${item.toString()}`);
	}
});

test('Array.prototype.shuffle()', t => {
	let arr = [1, 2, 3, 4, 5];
	let shufArr = arr.shuffle();
	t.is(shufArr.length, arr.length, 'shuffled array has same length as original array');
	t.notDeepEqual(shufArr, arr, 'shuffled array is not equal to original array');
});

/*
	String
*/
test('String.prototype.random()', t => {
	let str = 'QWERTY';
	let randStr = str.random();
	t.is(randStr.length, str.length, 'randomized string has same length as original string');
	t.notDeepEqual(randStr, str, 'randomized string is not equal to original string');
	for (let char of randStr) {
		t.true(randStr.includes(char), `original string has '${char}'`);
	}
});

test('String.prototype.shuffle()', t => {
	let str = 'QWERTY';
	let shufStr = str.shuffle();
	t.is(shufStr.length, str.length, 'shuffled string has same length as original string');
	t.notDeepEqual(shufStr, str, 'shuffled string is not equal to original string');
});

/*
	Number
*/
test('Number.prototype.randomTo(end)', t => {
	for (let i = -10; i <= 10; i++) {
		let start = i;
		let end = i + 2;
		let randNumber = start.randomTo(end);
		t.is((randNumber >= start) && (randNumber <= end), true, `randomized number within ${start} and ${end}`);
	}
});

test('Number.prototype.randomFrom(start)', t => {
	for (let i = -10; i <= 10; i++) {
		let start = i;
		let end = i + 2;
		let randNumber = end.randomFrom(start);
		t.is((randNumber >= start) && (randNumber <= end), true, `randomized number within ${start} and ${end}`);
	}
});

/*
	Date
*/
test('Date.prototype.randomHours()', t => {
	let currentDate = new Date();
	let newDate = currentDate.randomHours();
	t.truthy(newDate.getHours() != currentDate.getHours(), 'new hours is not equal to original hours.');
	t.truthy(newDate.getMinutes() == currentDate.getMinutes(), 'new minutes is equal to original minutes.');
	t.truthy(newDate.getSeconds() == currentDate.getSeconds(), 'new seconds is equal to original seconds.');
	t.truthy(newDate.getMilliseconds() == currentDate.getMilliseconds(), 'new milliseconds is equal to original milliseconds.');
	t.truthy(newDate.getDate() == currentDate.getDate(), 'new date is equal to original date.');
	t.truthy(newDate.getMonth() == currentDate.getMonth(), 'new month is equal to original month.');
	t.truthy(newDate.getFullYear() == currentDate.getFullYear(), 'new year is equal to original year.');
});

test('Date.prototype.randomMinutes()', t => {
	let currentDate = new Date();
	let newDate = currentDate.randomMinutes();
	t.truthy(newDate.getHours() == currentDate.getHours(), 'new hours is not equal to original hours.');
	t.truthy(newDate.getMinutes() != currentDate.getMinutes(), 'new minutes is equal to original minutes.');
	t.truthy(newDate.getSeconds() == currentDate.getSeconds(), 'new seconds is equal to original seconds.');
	t.truthy(newDate.getMilliseconds() == currentDate.getMilliseconds(), 'new milliseconds is equal to original milliseconds.');
	t.truthy(newDate.getDate() == currentDate.getDate(), 'new date is equal to original date.');
	t.truthy(newDate.getMonth() == currentDate.getMonth(), 'new month is equal to original month.');
	t.truthy(newDate.getFullYear() == currentDate.getFullYear(), 'new year is equal to original year.');
});

test('Date.prototype.randomSeconds()', t => {
	let currentDate = new Date();
	let newDate = currentDate.randomSeconds();
	t.truthy(newDate.getHours() == currentDate.getHours(), 'new hours is not equal to original hours.');
	t.truthy(newDate.getMinutes() == currentDate.getMinutes(), 'new minutes is equal to original minutes.');
	t.truthy(newDate.getSeconds() != currentDate.getSeconds(), 'new seconds is equal to original seconds.');
	t.truthy(newDate.getMilliseconds() == currentDate.getMilliseconds(), 'new milliseconds is equal to original milliseconds.');
	t.truthy(newDate.getDate() == currentDate.getDate(), 'new date is equal to original date.');
	t.truthy(newDate.getMonth() == currentDate.getMonth(), 'new month is equal to original month.');
	t.truthy(newDate.getFullYear() == currentDate.getFullYear(), 'new year is equal to original year.');
});

test('Date.prototype.randomMilliseconds()', t => {
	let currentDate = new Date();
	let newDate = currentDate.randomMilliseconds();
	t.truthy(newDate.getHours() == currentDate.getHours(), 'new hours is not equal to original hours.');
	t.truthy(newDate.getMinutes() == currentDate.getMinutes(), 'new minutes is equal to original minutes.');
	t.truthy(newDate.getSeconds() == currentDate.getSeconds(), 'new seconds is equal to original seconds.');
	t.truthy(newDate.getMilliseconds() != currentDate.getMilliseconds(), 'new milliseconds is equal to original milliseconds.');
	t.truthy(newDate.getDate() == currentDate.getDate(), 'new date is equal to original date.');
	t.truthy(newDate.getMonth() == currentDate.getMonth(), 'new month is equal to original month.');
	t.truthy(newDate.getFullYear() == currentDate.getFullYear(), 'new year is equal to original year.');
});

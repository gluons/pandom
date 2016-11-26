'use strict';

require('./');

const test = require('ava');

test('Array.prototype.random()', t => {
	let arr = ['a', 'b', 'c', 'd', 'e'];
	let randArr = arr.random();
	t.is(randArr.length, arr.length, 'randomized array has same length as original array');
	t.notDeepEqual(randArr, arr, 'randomized array is not equal to original array');
	for (let item of randArr) {
		t.true(randArr.includes(item), `original array has '${item.toString()}'`);
	}
});

test('Array.prototype.shuffle()', t => {
	let arr = ['a', 'b', 'c', 'd', 'e'];
	let shufArr = arr.shuffle();
	t.is(shufArr.length, arr.length, 'shuffled array has same length as original array');
	t.notDeepEqual(shufArr, arr, 'shuffled array is not equal to original array');
});

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

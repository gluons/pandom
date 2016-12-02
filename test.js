'use strict';

require('./pandom');

const test = require('ava');

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

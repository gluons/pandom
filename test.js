'use strict';

require('./');

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
	let number = 0;
	let randNumber1 = number.randomTo(5);
	let randNumber2 = number.randomTo(-5);
	t.is((randNumber1 >= 0) && (randNumber1 <= 5), true, 'randomized number within 0 and 5');
	t.is((randNumber2 >= -5) && (randNumber2 <= 0), true, 'randomized number within -5 and 0');
});

test('Number.prototype.randomFrom(start)', t => {
	let number1 = 0;
	let number2 = 5;
	let randNumber1 = number1.randomFrom(-5);
	let randNumber2 = number2.randomFrom(0);
	t.is((randNumber1 >= -5) && (randNumber1 <= 0), true, 'randomized number within -5 and 0');
	t.is((randNumber2 >= 0) && (randNumber2 <= 5), true, 'randomized number within 0 and 5');
});

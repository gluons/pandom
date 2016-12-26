'use strict';

require('../pandom');

const chai = require('chai');
const assert = chai.assert;

describe('Array', () => {
	let arr = [1, 2, 3, 4, 5];

	describe('Array.prototype.random()', () => {
		it('should return a randomized array with same length', () => {
			let randArr = arr.random();
			assert.lengthOf(randArr, arr.length);
			assert.notDeepEqual(randArr, arr);
			for (let item of randArr) {
				assert.include(arr, item);
			}
		});
	});

	for (let i = 0; i <= 10; i++) {
		describe(`Array.prototype.random(${i})`, () => {
			it(`should return a randomized array with ${i} length`, () => {
				let randArr = arr.random(i);
				assert.lengthOf(randArr, i);
				assert.notDeepEqual(randArr, arr);
				for (let item of randArr) {
					assert.include(arr, item);
				}
			});
		});
	}

	describe('Array.prototype.shuffle()', () => {
		it('shoud return a shuffled array with same length', () => {
			let shufArr = arr.shuffle();
			assert.lengthOf(shufArr, arr.length);
			assert.notDeepEqual(shufArr, arr);
		});
	});
});

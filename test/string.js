'use strict';

require('../pandom');

const chai = require('chai');
const assert = chai.assert;

describe('String', () => {
	let str = 'QWERTY';

	describe('String.prototype.random()', () => {
		it('should return a randomized string with same length', () => {
			let randStr = str.random();
			assert.lengthOf(randStr, str.length);
			assert.notDeepEqual(randStr, str);
			for (let char of randStr) {
				assert.include(str, char);
			}
		});
	});

	for (let i = 0; i <= 10; i++) {
		describe(`String.prototype.random(${i})`, () => {
			it(`should return a randomized string with ${i} length`, () => {
				let randStr = str.random(i);
				assert.lengthOf(randStr, i);
				assert.notDeepEqual(randStr, str);
				for (let item of randStr) {
					assert.include(str, item);
				}
			});
		});
	}

	describe('String.prototype.shuffle()', () => {
		it('shoud return a shuffled string with same length', () => {
			let randStr = str.shuffle();
			assert.lengthOf(randStr, str.length);
			assert.notDeepEqual(randStr, str);
		});
	});
});

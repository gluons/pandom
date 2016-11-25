'use strict';

require('../');

const assert = require('chai').assert;

describe('Pandom', () => {
	it('should return a randomized string from original string.', () => {
		let str = 'QWERTY';
		let randStr = str.random();
		assert.lengthOf(randStr, str.length, 'randomized string has same length as original string');
		assert.notStrictEqual(randStr, str, 'randomized string is not equal to original string');
		for(let char of randStr) {
			assert.include(str, char, `original string has '${char}'`);
		}
	});
});

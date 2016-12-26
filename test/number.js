'use strict';

require('../pandom');

const chai = require('chai');
const assert = chai.assert;

describe('Number', () => {
	for (let i = -10; i <= 10; i++) {
		let start = i;
		let end = i + 2;

		describe(`[${start}, ${end}]`, () => {
			describe(`Number.prototype.randomFrom(${start})`, () => {
				it(`should return a randomized within ${start} and ${end}`, () => {
					let randNumber = start.randomFrom(start);
					assert.operator(randNumber, '>=', start);
					assert.operator(randNumber, '<=', end);
				});
			});

			describe(`Number.prototype.randomTo(${end})`, () => {
				it(`should return a randomized within ${start} and ${end}`, () => {
					let randNumber = start.randomTo(end);
					assert.operator(randNumber, '>=', start);
					assert.operator(randNumber, '<=', end);
				});
			});
		});
	}
});

'use strict';

require('../pandom');
const dateLib = require('../lib/date');

const chai = require('chai');
const assert = chai.assert;
const DateEQ = require('date-eq');
const Comparer = DateEQ.Comparer;

let dateClone = dateLib.dateClone;
let dateRandomFunc = dateLib.dateRandomFunc;

describe('Lib / Date', () => {
	it('dateClone() should return new Date without reference', () => {
		let now = new Date();
		let nowCloned = dateClone(now);
		assert.notStrictEqual(now, nowCloned);
	});
	it(`dateRandomFunc() should return randomHours() function if pass 'hours' as 'target'`, () => {
		let func = dateRandomFunc('hours');
		assert.strictEqual(func, Date.prototype.randomHours);
	});
	it(`dateRandomFunc() should return randomMinutes() function if pass 'minutes' as 'target'`, () => {
		let func = dateRandomFunc('minutes');
		assert.strictEqual(func, Date.prototype.randomMinutes);
	});
	it(`dateRandomFunc() should return randomSeconds() function if pass 'seconds' as 'target'`, () => {
		let func = dateRandomFunc('seconds');
		assert.strictEqual(func, Date.prototype.randomSeconds);
	});
	it(`dateRandomFunc() should return randomMilliseconds() function if pass 'milliseconds' as 'target'`, () => {
		let func = dateRandomFunc('milliseconds');
		assert.strictEqual(func, Date.prototype.randomMilliseconds);
	});
	it(`dateRandomFunc() should return randomDate() function if pass 'date' as 'target'`, () => {
		let func = dateRandomFunc('date');
		assert.strictEqual(func, Date.prototype.randomDate);
	});
	it(`dateRandomFunc() should return randomMonth() function if pass 'month' as 'target'`, () => {
		let func = dateRandomFunc('month');
		assert.strictEqual(func, Date.prototype.randomMonth);
	});
	it(`dateRandomFunc() should return randomYear() function if pass 'year' as 'target'`, () => {
		let func = dateRandomFunc('year');
		assert.strictEqual(func, Date.prototype.randomYear);
	});
	it(`dateRandomFunc() should return the function that return 'this' or clone of 'this' (when 'this' is Date) if 'target' is invalid`, () => {
		let func = dateRandomFunc();
		let obj1 = { a: 1, b: 2, c:3 };
		let obj2 = new Date();
		assert.strictEqual(obj1, func.call(obj1));
		assert.notStrictEqual(obj2, func.call(obj2));
		assert.isTrue(Comparer.eq(obj2, func.call(obj2)));
	});
});

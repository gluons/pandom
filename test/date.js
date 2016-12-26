'use strict';

require('../pandom');

const MIN_DATE = new Date(0);
const MAX_DATE = require('../lib/date').MAX_DATE;

const chai = require('chai');
chai.use(require('chai-datetime'));
const assert = chai.assert;
const Combinatorics = require('js-combinatorics');
const DateEQ = require('date-eq');
const Comparer = DateEQ.Comparer;

describe('Date', () => {
	describe('Date.prototype.randomHours()', () => {
		it('shoud return new date object with randomized hours', () => {
			let currentDate = new Date();
			let newDate = currentDate.randomHours();
			assert.isFalse(Comparer.hrs(newDate, currentDate));
			assert.isTrue(Comparer.min(newDate, currentDate));
			assert.isTrue(Comparer.sec(newDate, currentDate));
			assert.isTrue(Comparer.ms(newDate, currentDate));
			assert.isTrue(Comparer.date(newDate, currentDate));
			assert.isTrue(Comparer.month(newDate, currentDate));
			assert.isTrue(Comparer.year(newDate, currentDate));
		});
	});
	describe('Date.prototype.randomMinutes()', () => {
		it('shoud return new date object with randomized minutes', () => {
			let currentDate = new Date();
			let newDate = currentDate.randomMinutes();
			assert.isTrue(Comparer.hrs(newDate, currentDate));
			assert.isFalse(Comparer.min(newDate, currentDate));
			assert.isTrue(Comparer.sec(newDate, currentDate));
			assert.isTrue(Comparer.ms(newDate, currentDate));
			assert.isTrue(Comparer.date(newDate, currentDate));
			assert.isTrue(Comparer.month(newDate, currentDate));
			assert.isTrue(Comparer.year(newDate, currentDate));
		});
	});
	describe('Date.prototype.randomSeconds()', () => {
		it('shoud return new date object with randomized seconds', () => {
			let currentDate = new Date();
			let newDate = currentDate.randomSeconds();
			assert.isTrue(Comparer.hrs(newDate, currentDate));
			assert.isTrue(Comparer.min(newDate, currentDate));
			assert.isFalse(Comparer.sec(newDate, currentDate));
			assert.isTrue(Comparer.ms(newDate, currentDate));
			assert.isTrue(Comparer.date(newDate, currentDate));
			assert.isTrue(Comparer.month(newDate, currentDate));
			assert.isTrue(Comparer.year(newDate, currentDate));
		});
	});
	describe('Date.prototype.randomMilliseconds()', () => {
		it('shoud return new date object with randomized milliseconds', () => {
			let currentDate = new Date();
			let newDate = currentDate.randomMilliseconds();
			assert.isTrue(Comparer.hrs(newDate, currentDate));
			assert.isTrue(Comparer.min(newDate, currentDate));
			assert.isTrue(Comparer.sec(newDate, currentDate));
			assert.isFalse(Comparer.ms(newDate, currentDate));
			assert.isTrue(Comparer.date(newDate, currentDate));
			assert.isTrue(Comparer.month(newDate, currentDate));
			assert.isTrue(Comparer.year(newDate, currentDate));
		});
	});
	describe('Date.prototype.randomDate()', () => {
		it('shoud return new date object with randomized date', () => {
			let currentDate = new Date();
			let newDate = currentDate.randomDate();
			assert.isTrue(Comparer.hrs(newDate, currentDate));
			assert.isTrue(Comparer.min(newDate, currentDate));
			assert.isTrue(Comparer.sec(newDate, currentDate));
			assert.isTrue(Comparer.ms(newDate, currentDate));
			assert.isFalse(Comparer.date(newDate, currentDate));
			assert.isTrue(Comparer.month(newDate, currentDate));
			assert.isTrue(Comparer.year(newDate, currentDate));
		});
	});
	describe('Date.prototype.randomMonth()', () => {
		it('shoud return new date object with randomized month', () => {
			let currentDate = new Date();
			let newDate = currentDate.randomMonth();
			assert.isTrue(Comparer.hrs(newDate, currentDate));
			assert.isTrue(Comparer.min(newDate, currentDate));
			assert.isTrue(Comparer.sec(newDate, currentDate));
			assert.isTrue(Comparer.ms(newDate, currentDate));
			assert.isTrue(Comparer.date(newDate, currentDate));
			assert.isFalse(Comparer.month(newDate, currentDate));
			assert.isTrue(Comparer.year(newDate, currentDate));
		});
	});
	describe('Date.prototype.randomYear()', () => {
		it('shoud return new date object with randomized year', () => {
			let currentDate = new Date();
			let newDate = currentDate.randomYear();
			assert.isTrue(Comparer.hrs(newDate, currentDate));
			assert.isTrue(Comparer.min(newDate, currentDate));
			assert.isTrue(Comparer.sec(newDate, currentDate));
			assert.isTrue(Comparer.ms(newDate, currentDate));
			assert.isTrue(Comparer.date(newDate, currentDate));
			assert.isTrue(Comparer.month(newDate, currentDate));
			assert.isFalse(Comparer.year(newDate, currentDate));
			assert.isAtLeast(newDate.getFullYear(), MIN_DATE.getFullYear());
			assert.isAtMost(newDate.getFullYear(), MAX_DATE.getFullYear());
		});
	});
	(function () {
		let targets = ['hours', 'minutes', 'seconds', 'milliseconds', 'date', 'month', 'year'];
		let targetsPowerSet = Combinatorics.power(targets);
		targetsPowerSet.forEach(newTargets => {
			let parameterStr = newTargets.map(newTarget => `'${newTarget}'`).join(', ');
			describe(`Date.prototype.random(${parameterStr})`, () => {
				if (newTargets.length > 0) {
					let currentDate = new Date();
					let newDate = Date.prototype.random.apply(currentDate, newTargets);
					newTargets.forEach(newTarget => {
						it(`'${newTarget}' should be randomized`, () => {
							if (/^hour(s?)$/.test(newTarget)) {
								assert.isFalse(Comparer.hrs(newDate, currentDate));
							} else if (/^minute(s?)$/.test(newTarget)) {
								assert.isFalse(Comparer.min(newDate, currentDate));
							} else if (/^second(s?)$/.test(newTarget)) {
								assert.isFalse(Comparer.sec(newDate, currentDate));
							} else if (/^millisecond(s?)$/.test(newTarget)) {
								assert.isFalse(Comparer.ms(newDate, currentDate));
							} else if (/^date(s?)$/.test(newTarget)) {
								assert.isFalse(Comparer.date(newDate, currentDate));
							} else if (/^month(s?)$/.test(newTarget)) {
								assert.isFalse(Comparer.month(newDate, currentDate));
							} else if (/^year(s?)$/.test(newTarget)) {
								assert.isFalse(Comparer.year(newDate, currentDate));
							}
						});
					});
				} else {
					let currentDate = new Date();
					let newDate = currentDate.random();
					it('should return new randomized date object', () => {
						assert.isFalse(Comparer.eq(newDate, currentDate));
					});
					it('new randomized date object should be within min date and max date.', () => {
						assert.afterDate(newDate, MIN_DATE);
						assert.afterTime(newDate, MIN_DATE);
						assert.beforeDate(newDate, MAX_DATE);
						assert.beforeTime(newDate, MAX_DATE);
					});
				}
			});
		});
	})();
});

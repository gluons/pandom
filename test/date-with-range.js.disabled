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

describe('Date with range', () => {
	describe('Date.prototype.randomHours(6, 18)', () => {
		it('shoud return new date object with randomized hours that within 6 and 18', () => {
			let currentDate = new Date();
			let newDate = currentDate.randomHours(6, 18);
			let hours = newDate.getHours();
			assert.isAtLeast(hours, 6);
			assert.isAtMost(hours, 18);
			assert.isFalse(Comparer.hrs(newDate, currentDate));
			assert.isTrue(Comparer.min(newDate, currentDate));
			assert.isTrue(Comparer.sec(newDate, currentDate));
			assert.isTrue(Comparer.ms(newDate, currentDate));
			assert.isTrue(Comparer.date(newDate, currentDate));
			assert.isTrue(Comparer.month(newDate, currentDate));
			assert.isTrue(Comparer.year(newDate, currentDate));
		});
	});
	describe('Date.prototype.randomMinutes(15, 45)', () => {
		it('shoud return new date object with randomized minutes that within 15 and 45', () => {
			let currentDate = new Date();
			let newDate = currentDate.randomMinutes(15, 45);
			let minutes = newDate.getMinutes();
			assert.isAtLeast(minutes, 15);
			assert.isAtMost(minutes, 45);
			assert.isTrue(Comparer.hrs(newDate, currentDate));
			assert.isFalse(Comparer.min(newDate, currentDate));
			assert.isTrue(Comparer.sec(newDate, currentDate));
			assert.isTrue(Comparer.ms(newDate, currentDate));
			assert.isTrue(Comparer.date(newDate, currentDate));
			assert.isTrue(Comparer.month(newDate, currentDate));
			assert.isTrue(Comparer.year(newDate, currentDate));
		});
	});
	describe('Date.prototype.randomSeconds(15, 45)', () => {
		it('shoud return new date object with randomized seconds that within 15 and 45', () => {
			let currentDate = new Date();
			let newDate = currentDate.randomSeconds(15, 45);
			let seconds = newDate.getSeconds();
			assert.isAtLeast(seconds, 15);
			assert.isAtMost(seconds, 45);
			assert.isTrue(Comparer.hrs(newDate, currentDate));
			assert.isTrue(Comparer.min(newDate, currentDate));
			assert.isFalse(Comparer.sec(newDate, currentDate));
			assert.isTrue(Comparer.ms(newDate, currentDate));
			assert.isTrue(Comparer.date(newDate, currentDate));
			assert.isTrue(Comparer.month(newDate, currentDate));
			assert.isTrue(Comparer.year(newDate, currentDate));
		});
	});
	describe('Date.prototype.randomMilliseconds(250, 750)', () => {
		it('shoud return new date object with randomized milliseconds that within 250 and 750', () => {
			let currentDate = new Date();
			let newDate = currentDate.randomMilliseconds(250, 750);
			let milliseconds = newDate.getMilliseconds();
			assert.isAtLeast(milliseconds, 250);
			assert.isAtMost(milliseconds, 750);
			assert.isTrue(Comparer.hrs(newDate, currentDate));
			assert.isTrue(Comparer.min(newDate, currentDate));
			assert.isTrue(Comparer.sec(newDate, currentDate));
			assert.isFalse(Comparer.ms(newDate, currentDate));
			assert.isTrue(Comparer.date(newDate, currentDate));
			assert.isTrue(Comparer.month(newDate, currentDate));
			assert.isTrue(Comparer.year(newDate, currentDate));
		});
	});
	describe('Date.prototype.randomDate(7, 21)', () => {
		it('shoud return new date object with randomized date that within 7 and 21', () => {
			let currentDate = new Date();
			let newDate = currentDate.randomDate(7, 21);
			let date = newDate.getDate();
			assert.isAtLeast(date, 7);
			assert.isAtMost(date, 21);
			assert.isTrue(Comparer.hrs(newDate, currentDate));
			assert.isTrue(Comparer.min(newDate, currentDate));
			assert.isTrue(Comparer.sec(newDate, currentDate));
			assert.isTrue(Comparer.ms(newDate, currentDate));
			assert.isFalse(Comparer.date(newDate, currentDate));
			assert.isTrue(Comparer.month(newDate, currentDate));
			assert.isTrue(Comparer.year(newDate, currentDate));
		});
	});
	describe('Date.prototype.randomMonth(2, 8)', () => {
		it('shoud return new date object with randomized month that within 2 and 8', () => {
			let currentDate = new Date();
			let newDate = currentDate.randomMonth(2, 8);
			let month = newDate.getMonth();
			assert.isAtLeast(month, 2);
			assert.isAtMost(month, 8);
			assert.isTrue(Comparer.hrs(newDate, currentDate));
			assert.isTrue(Comparer.min(newDate, currentDate));
			assert.isTrue(Comparer.sec(newDate, currentDate));
			assert.isTrue(Comparer.ms(newDate, currentDate));
			assert.isTrue(Comparer.date(newDate, currentDate));
			assert.isFalse(Comparer.month(newDate, currentDate));
			assert.isTrue(Comparer.year(newDate, currentDate));
		});
	});
	describe('Date.prototype.randomYear(2000, 3000)', () => {
		it('shoud return new date object with randomized year that within 2000 and 3000', () => {
			let currentDate = new Date();
			let newDate = currentDate.randomYear(2000, 3000);
			let year = newDate.getFullYear();
			assert.isAtLeast(year, 2000);
			assert.isAtMost(year, 3000);
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
});

'use strict';

module.exports = {
	/*
		Maximum date is a date with 8640000000000000 milliseconds since 01 January, 1970 UTC.
		So, the max year is 275760. ( From `(new Date(8640000000000000)).getFullYear()` )

		More info -> http://stackoverflow.com/questions/11526504/minimum-and-maximum-date
	*/
	MAX_DATE: new Date(8640000000000000),
	MAX_YEAR: 275760,

	/**
	 * Deeply clone date object
	 * @param  {Date} date An original date
	 * @return {Date}      A new cloned date
	 */
	dateClone: function dateClone(date) {
		return new Date(date.getTime());
	},
	/**
	 * Determine a random function for date part.
	 * @param  {String} target Date part target
	 * @return {Function}      A function to random date part
	 */
	dateRandomFunc: function dateRandomFunc(target) {
		if (/^hour(s?)$/.test(target)) {
			return Date.prototype.randomHours;
		} else if (/^minute(s?)$/.test(target)) {
			return Date.prototype.randomMinutes;
		} else if (/^second(s?)$/.test(target)) {
			return Date.prototype.randomSeconds;
		} else if (/^millisecond(s?)$/.test(target)) {
			return Date.prototype.randomMilliseconds;
		} else if (/^date(s?)$/.test(target)) {
			return Date.prototype.randomDate;
		} else if (/^month(s?)$/.test(target)) {
			return Date.prototype.randomMonth;
		} else if (/^year(s?)$/.test(target)) {
			return Date.prototype.randomYear;
		} else {
			return null;
		}
	}
};

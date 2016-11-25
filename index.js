'use strict';

// const random = require('random-js');
const randomize = require('randomatic');

String.prototype.random = function (length) {
	if (typeof length !== 'number') {
		length = this.length;
	}
	return randomize('?', length, {
		chars: this
	});
};

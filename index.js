'use strict';

const Random = require('random-js');
const randomize = require('randomatic');

function eng() {
	let engine = Random.engines.mt19937();
	engine.autoSeed();
	return engine;
}


Array.prototype.random = function(length) {
	if (typeof length !== 'number') {
		length = this.length;
	}
	let newArray = [];
	for (let i = 0; i < length; i++) {
		let item = Random.picker(this)(eng());
		newArray.push(item);
	}
	return newArray;
};

Array.prototype.shuffle = function () {
	let oldArray = this.slice(0);
	let newArray = [];
	while (oldArray.length > 0) {
		let item = Random.picker(oldArray)(eng());
		let index = oldArray.indexOf(item);
		oldArray.splice(index, 1);
		newArray.push(item);
	}
	return newArray;
};

String.prototype.random = function (length) {
	if (typeof length !== 'number') {
		length = this.length;
	}
	return randomize('?', length, {
		chars: this
	});
};

String.prototype.shuffle = function () {
	let strArr = Array.from(this);
	return strArr.shuffle().join('');
};

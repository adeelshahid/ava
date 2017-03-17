'use strict';
const Observable = require('zen-observable')

const test = require('../../..');
test(t => {
	return new Observable(() => {
		t.pass();
	});
});

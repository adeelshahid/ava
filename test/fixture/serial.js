import test from '../../';

const tests = [];

test.cb('first', t => {
	setTimeout(() => {
		tests.push('first');
		t.pass();
		t.end();
	}, 300);
});

test.cb('second', t => {
	setTimeout(() => {
		tests.push('second');
		t.pass();
		t.end();
	}, 100);
});

test(t => {
	t.deepEqual(tests, ['first', 'second']);
});

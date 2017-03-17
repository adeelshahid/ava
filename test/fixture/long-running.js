import test from '../../';

test.cb('slow', t => {
	setTimeout(t.end, 5000);
	t.pass();
});

test('fast', t => t.pass());

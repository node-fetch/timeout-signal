import test from 'ava';
import {pEvent} from 'p-event';
import timeSpan from 'time-span';
import timeoutSignal from './index.js';

test('main', async t => {
	t.timeout(500);

	const signal = timeoutSignal(250);
	const end = timeSpan();

	t.false(signal.aborted);

	await pEvent(signal, 'abort');

	t.true(signal.aborted);
	t.true(end() < 500);
});

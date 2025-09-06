# timeout-signal

> Create an AbortSignal that aborts after a delay

> [!WARNING]
> Deprecated! Use [`AbortSignal.timeout(ms)`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout_static#browser_compatibility) instead!

## Install

```sh
npm install timeout-signal
```

## Usage

```js
import timeoutSignal from 'timeout-signal';

const signal = timeoutSignal(5000);

try {
	const response = await fetch('https://www.google.com', {signal});
	// Handle response
} catch (error) {
	if (signal.aborted) {
		// Handle abortion
	}
}
```

## API

### timeoutSignal(timeout)

#### timeout

Type: `integer`

The milliseconds to wait.

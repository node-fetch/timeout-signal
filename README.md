# timeout-signal [![Travis CI Build Status](https://img.shields.io/travis/com/node-fetch/timeout-signal/master.svg?style=for-the-badge)](https://travis-ci.com/node-fetch/timeout-signal)

Create an AbortSignal that aborts after a delay.

[![NPM Badge](https://nodei.co/npm/timeout-signal.png)](https://npmjs.com/package/timeout-signal)

## Install

```sh
npm install timeout-signal
```

## Usage

```js
const timeoutSignal = require("timeout-signal");
const fetch = require("cross-fetch");

fetch("https://www.google.com", { signal: timeoutSignal(5000) })
	.then(response => {
		// Handle response
	})
	.catch(error => {
		if (error.message === "The user aborted a request.") {
			// Handle abortion
		}
	})
```

## API

### timeoutSignal(timeout)

#### timeout

Type: `integer`

The milliseconds to wait.

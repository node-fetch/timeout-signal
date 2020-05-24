import { AbortSignal } from "abort-controller"

/**
Create an AbortSignal that aborts after a delay.
@param timeout The milliseconds to wait.
@example
```
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
*/
declare function timeoutSignal(timeout: number): AbortSignal

export = timeoutSignal

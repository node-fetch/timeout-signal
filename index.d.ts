import { AbortSignal } from "abort-controller"

declare const timeoutSignal: {
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
	(timeout: number): AbortSignal

	/**
	The signal to clear the timeout for.
	@param signal The signal to clear the timeout for.
	@example
	```
	const timeoutSignal = require("timeout-signal");
	const fetch = require("cross-fetch");

	const signal = timeoutSignal(5000)

	fetch("https://www.google.com", { signal })
		.then(response => {
			timeoutSignal.clear(signal)
			// Handle response
		})
		.catch(error => {
			if (error.message === "The user aborted a request.") {
				// Handle abortion
			}
		})
	```
	*/
	clear(signal: AbortSignal): void
}

export = timeoutSignal

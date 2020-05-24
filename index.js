"use strict"

const { AbortController } = require("abort-controller")

module.exports = timeout => {
	if (!Number.isInteger(timeout)) {
		throw new TypeError(`Expected an integer, got ${typeof timeout}`)
	}

	const controller = new AbortController()

	setTimeout(() => {
		controller.abort()
	}, timeout)

	return controller.signal
}

"use strict"

const { AbortController } = require("abort-controller")

const signalMap = new WeakMap()

module.exports = timeout => {
	if (!Number.isInteger(timeout)) {
		throw new TypeError(`Expected an integer, got ${typeof timeout}`)
	}

	const controller = new AbortController()

	const timeoutId = setTimeout(() => {
		controller.abort()
	}, timeout)

	signalMap.set(controller.signal, timeoutId)

	return controller.signal
}

module.exports.clear = signal => {
	clearTimeout(signalMap.get(signal))
}

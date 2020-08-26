const test = require("ava")
const pEvent = require("p-event")
const delay = require("delay")
const timeoutSignal = require(".")

test("main", async t => {
	const signal = timeoutSignal(0)

	await pEvent(signal, "abort")

	t.pass()
})

test(".clear()", async t => {
	const signal = timeoutSignal(250)

	timeoutSignal.clear(signal)

	let hasAborted = false

	signal.addEventListener("abort", () => {
		hasAborted = true
	})

	await delay(500)

	t.false(hasAborted)
})

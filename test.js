const test = require("ava")
const pEvent = require("p-event")
const timeoutSignal = require(".")

test("main", async t => {
	const signal = timeoutSignal(0)

	await pEvent(signal, "abort")

	t.pass()
})

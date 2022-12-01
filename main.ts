import { onTick } from './lib'

onTick((ts: any) => {
	const formatted = ts.getFormatted('hh:mm:ss')
	console.log(formatted)
})

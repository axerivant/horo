import format from './formatter'

const createTimeStamp = (ms: number) => {
	const date = new Date(ms)
	return {
		getFormatted: (rules: string) => {
			/**Unstable, still in development */
			return format(date, rules)
		},

		getDate: () => {
			/** Returns the Date object for current tick */
			return date
		}
	}
}

const clock = (onTick: Function) => {
	// ticker
	let tickCount = 1
	const startTime = Date.now()
	const frame = () => {
		const currentTimeMS = Date.now()
		const nextTimeMS = startTime + tickCount * 1000

		if (currentTimeMS - nextTimeMS >= 0) {
			const ts = createTimeStamp(currentTimeMS)
			onTick(ts)
			// next tick
			tickCount += 1
		}
		window.requestAnimationFrame(frame)
	}

	frame()
}

export const onTick = (callback: Function) => {
	clock(callback)
	return {}
}

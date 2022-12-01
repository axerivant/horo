const format = (date: Date, rules: string) => {
	const r = rules.toLowerCase()
	// detect invalid rules
	if (r.length > 8) {
		throw new Error('Rules string length should not be more than 8.')
	}
	if (r.length < 2) {
		throw new Error('Rules string length should be at least 2.')
	}

	const extractedRules = r.split(':')
	const formatted = `${r[0]}:${r[1]}:${r[2]}`
	// console.log(formatted)

	const hours = date.getHours()
	const minutes = date.getMinutes()
	const seconds = date.getSeconds()

	return `${hours}:${minutes}:${seconds}`
}

export default format

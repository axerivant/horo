# horo

## overview
Horo (Derived from the Latin word 'Hora' meaning 'an hour') is a simple, **accurate** clock for the browser.

## features
- Uses `window.requestAnimationFrame` to 'tick' the clock, as opposed to `setInterval` or `setTimeout`.
  This results in virtually perfect accuracy/stability suitable for an in-app clock feature.
- Built in formatter (still working on it)
- Literally just a `onTick` function that returns the Date object at each second. You can specify the interval as well.

## usage
```ts
import { onTick } from 'horo'

onTick((ts: any) => {
	const jsDateObject = ts.getDate()
  // do whatever
})

```

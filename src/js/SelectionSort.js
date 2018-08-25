async function selectionSort(arr, swapFn, peekAt) {
	for (let i = 0; i < arr.length-1; i++) {
		let min = i
		for (let j = i; j < arr.length; j++) {
			if (await peekAt(min) > await peekAt(j)) {
				min = j
			}
		}
		await swapFn(i, min)
	}
}

export default selectionSort

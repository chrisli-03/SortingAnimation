async function insertionSort(arr, swapFn, peekAt) {
	for (let i = 1; i < arr.length; i++) {
		let pivot = i
		for (let j = i-1; j >= 0; j--) {
			if (await peekAt(j) > await peekAt(pivot)) {
				await swapFn(pivot, j)
				pivot = j
			} else {
				break
			}
		}
	}
}

export default insertionSort

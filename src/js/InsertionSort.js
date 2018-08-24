async function insertionSort(arr, swapFn, peekAt, assignAt) {
	for (let i = 1; i < arr.length; i++) {
		let pivot = i
		let temp = await peekAt(pivot)
		let j = i-1
		while (j >= 0) {
			let n = await peekAt(j)
			if (n > temp) {
				await assignAt(j--+1, n)
			} else {
				break
			}
		}
		await assignAt(j+1, temp)
	}
}

export default insertionSort

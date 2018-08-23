async function insertionSort(arr, swapFn) {
	for (let i = 1; i < arr.length; i++) {
		let pivot = i
		for (let j = i-1; j >= 0; j--) {
			if (arr[j] > arr[pivot]) {
				await swapFn(pivot, j)
				pivot = j
			}
		}
	}
}

export default insertionSort

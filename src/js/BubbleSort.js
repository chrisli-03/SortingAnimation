async function bubbleSort(arr, swapFn) {
	let pivot = arr.length-1
	let isSorted = false
	while(!isSorted) {
		isSorted = true
		for (let i = 0; i < pivot; i++) {
			if (arr[i] > arr[i+1]) {
				await swapFn(i, i+1)
				isSorted = false
			}
		}
		pivot--
	}
}

export default bubbleSort

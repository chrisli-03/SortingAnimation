async function partition(arr, pivot, left, right, swapFn) {
	let pivotValue = arr[pivot],
		partitionIndex = left;

	for (let i = left; i < right; i++) {
		if (arr[i] < pivotValue) {
			await swapFn(i, partitionIndex)
			partitionIndex++
		}
	}
	await swapFn(right, partitionIndex)
	return partitionIndex
}

async function quickSortHelper(arr, swapFn, left, right) {
	let len = arr.length,
		pivot,
		partitionIndex
	if (left < right) {
		pivot = right;
		partitionIndex = await partition(arr, pivot, left, right, swapFn)
		await quickSortHelper(arr, swapFn, left, partitionIndex - 1)
		await quickSortHelper(arr, swapFn, partitionIndex + 1, right)
	}
}

const algorithms = {
	bubbleSort: async function(arr, swapFn) {
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
		return true
	},
	quickSort: async function(arr, swapFn) {
		await quickSortHelper(arr, swapFn, 0, arr.length-1)
		return true
	}
}

export default algorithms

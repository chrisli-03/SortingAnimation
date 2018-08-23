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

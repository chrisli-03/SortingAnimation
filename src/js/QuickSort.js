// Checks if subarray is sorted
// This is to escape the case when alot of repeating data
// such that the algorithm gets too slow
async function isSort(arr, left, right, peekAt) {
	while (left < right) {
		if (await peekAt(left) > await peekAt(++left)) return false
	}
	return true
}

async function partition(arr, pivot, left, right, swapFn, peekAt) {
	if (await isSort(arr, left, right, peekAt)) return -1
	let pivotVal = await peekAt(pivot)
	while (left < right) {
		// find value on left side greater or equal to pivot
		while (await peekAt(left) < pivotVal && left < right) {
			left++
		}
		// find value on right side less or equal to pivot
		while (await peekAt(right) > pivotVal && right > left) {
			right--
		}
		if (left < right) { // left and right hasnt collide
			await swapFn(left, right)
			// break infinite loop when swapping elements of same value
			if (await peekAt(left) === await peekAt(right)) right--
		}
	}
	return left
}

async function quickSort(arr, left, right, swapFn, peekAt) {
	if (left >= right) return
	let len = arr.length,
			pivot = (left/2 + right/2)|0 //avoid overflow
	let partitionIndex = await partition(arr, pivot, left, right, swapFn, peekAt)
	if (partitionIndex > -1) {
		await quickSort(arr, left, partitionIndex, swapFn, peekAt)
		await quickSort(arr, partitionIndex + 1, right, swapFn, peekAt)
	}
}

export default quickSort

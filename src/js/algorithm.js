function isSort(arr, left, right) {
	while (left < right) {
		if (arr[left] > arr[++left]) return false
	}
	return true
}

async function partition(arr, pivot, left, right, swapFn) {
	if (isSort(arr, left, right)) return -1
	let pivotVal = arr[pivot]
	while (left < right) {
		// find value on left side greater or equal to pivot
		while (arr[left] < pivotVal && left < right) {
			left++
		}
		// find value on right side less or equal to pivot
		while (arr[right] > pivotVal && right > left) {
			right--
		}
		if (left < right) { // left and right hasnt collide
			await swapFn(left, right)
			// break infinite loop when swapping elements of same value
			if (arr[left] === arr[right]) right--
		}
	}
	return left
}

async function quickSortHelper(arr, swapFn, left, right) {
	if (left >= right) return
	let len = arr.length,
			pivot = (left/2 + right/2)|0
	let partitionIndex = await partition(arr, pivot, left, right, swapFn)
	console.log(partitionIndex)
	if (partitionIndex > -1) {
		await quickSortHelper(arr, swapFn, left, partitionIndex)
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

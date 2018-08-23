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
	if (partitionIndex > -1) {
		await quickSortHelper(arr, swapFn, left, partitionIndex)
		await quickSortHelper(arr, swapFn, partitionIndex + 1, right)
	}
}

const algorithms = {
	insertionSort: async function(arr, swapFn) {
		for (let i = 1; i < arr.length; i++) {
			let pivot = i
			for (let j = i-1; j >= 0; j--) {
				if (arr[j] > arr[pivot]) {
					await swapFn(pivot, j)
					pivot = j
				}
			}
		}
		return true
	},
	selectionSort: async function(arr, swapFn) {
		for (let i = 0; i < arr.length-1; i++) {
			let min = i
			for (let j = i; j < arr.length; j++) {
				if (arr[min] > arr[j]) {
					min = j
				}
			}
			await swapFn(i, min)
		}
		return true
	},
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

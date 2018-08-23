async function insertionSortHelper(arr, swapFn) {
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

async function selectionSortHelper(arr, swapFn) {
	for (let i = 0; i < arr.length-1; i++) {
		let min = i
		for (let j = i; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j
			}
		}
		await swapFn(i, min)
	}
}

async function bubbleSortHelper(arr, swapFn) {
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

async function cocktailShakerSortHelper(arr, swapFn) {
	let left = -1, right = arr.length
	while (++left < --right) { // pointers havent collide
		for (let i = left; i < right; i++) { // move largest element to right
			if (arr[i] > arr[i+1]) await swapFn(i, i+1)
		}
		for (let i = right; i > left; i--) { // move smallest element to left
			if (arr[i] < arr[i-1]) await swapFn(i, i-1)
		}
	}
}

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
			pivot = (left/2 + right/2)|0 //avoid overflow
	let partitionIndex = await partition(arr, pivot, left, right, swapFn)
	if (partitionIndex > -1) {
		await quickSortHelper(arr, swapFn, left, partitionIndex)
		await quickSortHelper(arr, swapFn, partitionIndex + 1, right)
	}
}

async function merge(arr, left, mid, right, swapFn) {
	let left1 = left,
			right1 = mid,
			left2 = mid+1,
			right2 = right
	while (left1 <= right1 && left2 <= right2) {
		if (arr[left1] <= arr[left2]) left1++ // arr[left1] is in sorted position
		else { // swap arr[left1] with first element in right array
			let temp = left2
			while (temp > left1) { // move element to sorted position
				await swapFn(temp, --temp)
			}
			left1++ // shift left array 1 step right
			right1++
			left2++
		}
	}
}

async function mergeSortIPHelper(arr, swapFn, left, right) {
	if (left >= right) return
	let mid = (left + (right - left)/2)|0 //avoid overflow
	await mergeSortIPHelper(arr, swapFn, left, mid)
	await mergeSortIPHelper(arr, swapFn, mid+1, right)
	await merge(arr, left, mid, right, swapFn)
}

const algorithms = {
	async insertionSort(arr, swapFn) {
		await insertionSortHelper(arr, swapFn)
		return true
	},
	async selectionSort(arr, swapFn) {
		await selectionSortHelper(arr, swapFn)
		return true
	},
	async bubbleSort(arr, swapFn) {
		await bubbleSortHelper(arr, swapFn)
		return true
	},
	async cocktailShakerSort(arr, swapFn) {
		await cocktailShakerSortHelper(arr, swapFn)
		return true
	},
	async quickSort(arr, swapFn) {
		await quickSortHelper(arr, swapFn, 0, arr.length-1)
		return true
	},
	async mergeSortIP(arr, swapFn) {
		await mergeSortIPHelper(arr, swapFn, 0, arr.length-1)
		return true
	}
}

export default algorithms

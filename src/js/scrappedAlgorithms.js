// quicksort
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

// mergesort
async function merge(arr, left, mid, right, swapFn) {
	let left1 = left,
			right1 = mid,
			left2 = mid+1,
			right2 = right
	while (left1 <= right1 && left2 <= right2) {
		if (arr[left1] <= arr[left2]) left1++ // arr[left1] is in sorted position
		else { // swap arr[left1] with first element in right array
			let temp = left2
			await swap(temp, left1)
			while (arr[temp] > arr[temp+1]) { // move element to sorted position
				await swapFn(temp, ++temp)
			}
		}
	}
}


//shellsort
async function partition(arr, gap, swapFn, peekAt) {
  for (let i = 0; i < gap; i++) {
    let left = i, right = i + gap
    while (right < arr.length) {
      let left_val = await peekAt(left)
      let right_val = await peekAt(right)
      if (left_val > right_val) await swapFn(left, right)
      left = right
      right = right + gap
    }
  }
}

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

async function shellSort(arr, swapFn, peekAt, assignAt) {
  let gap = (arr.length/2)|0
  while (gap > 0) {
    console.log(gap)
    await partition(arr, gap, swapFn, peekAt)
    gap = (gap/2)|0
  }
  await insertionSort(arr, swapFn, peekAt, assignAt)
}

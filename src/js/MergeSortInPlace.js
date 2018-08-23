async function merge(arr, left, mid, right, swapFn, peekAt) {
	let left1 = left,
			right1 = mid,
			left2 = mid+1,
			right2 = right
	while (left1 <= right1 && left2 <= right2) {
		if (await peekAt(left1) <= await peekAt(left2)) left1++ // arr[left1] is in sorted position
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

async function mergeSortIP(arr, left, right, swapFn, peekAt) {
	if (left >= right) return
	let mid = (left + (right - left)/2)|0 //avoid overflow
	await mergeSortIP(arr, left, mid, swapFn, peekAt)
	await mergeSortIP(arr, mid+1, right, swapFn, peekAt)
	await merge(arr, left, mid, right, swapFn, peekAt)
}

export default mergeSortIP

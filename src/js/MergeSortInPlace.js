async function merge(arr, left, mid, right, swapFn, peekAt, assignAt) {
	let left1 = left,
			right1 = mid,
			left2 = mid+1,
			right2 = right
	while (left1 <= right1 && left2 <= right2) {
		let val_left1 = await peekAt(left1)
		let val_left2 = await peekAt(left2)
		if (val_left1 <= val_left2) left1++ // arr[left1] is in sorted position
		else { // swap arr[left1] with first element in right array
			let temp = left2
			let i = temp-1
			while (i >= left1) {
				let val_i = await peekAt(i)
				if (val_i > val_left2) {
					await assignAt(i--+1, val_i)
				} else {
					break
				}
			}
			await assignAt(i+1, val_left2)

			left1++ // shift left array 1 step right
			right1++
			left2++
		}
	}
}

async function mergeSortIP(arr, left, right, swapFn, peekAt, assignAt) {
	if (left >= right) return
	let mid = (left + (right - left)/2)|0 //avoid overflow
	await mergeSortIP(arr, left, mid, swapFn, peekAt, assignAt)
	await mergeSortIP(arr, mid+1, right, swapFn, peekAt, assignAt)
	await merge(arr, left, mid, right, swapFn, peekAt, assignAt)
}

export default mergeSortIP

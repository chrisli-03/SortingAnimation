function iParent(i) {
	return Math.floor((i-1)/2)
}
function iLeftChild(i) {
	return 2*i+1
}
function iRightChild(i) {
	return 2*i+2
}
async function heapify(arr, swapFn, peekAt) {
	let start = iParent(arr.length-1)
	while (start >= 0) {
		await siftDown(arr, start, arr.length-1, swapFn, peekAt)
		start--
	}
}
async function siftDown(arr, start, end, swapFn, peekAt) {
	let root = start
	while (iLeftChild(root) <= end) {
		let child = iLeftChild(root)
		let swap = root
		let val_swap = await peekAt(swap)
		let val_child = await peekAt(child)
		if (val_swap < val_child) {
			swap = child
			val_swap = val_child
		}
		if (child+1 <= end && val_swap < await peekAt(child+1)) {
			swap = child+1
		}
		if (swap === root) {
			return
		} else {
      await swapFn(root, swap)
			root = swap
		}
	}
}
async function heapSort(arr, swapFn, peekAt) {
	await heapify(arr, swapFn, peekAt)
	let end = arr.length-1
	while (end > 0) {
    await swapFn(end, 0)
		end--
		await siftDown(arr, 0, end, swapFn, peekAt)
	}
}
export default heapSort

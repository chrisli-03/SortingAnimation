import insertionSortHelper from './InsertionSort'
import selectionSortHelper from './SelectionSort'
import bubbleSortHelper from './BubbleSort'
import cocktailShakerSortHelper from './CocktailShakerSort'
import quickSortHelper from './QuickSort'
import mergeSortIPHelper from './MergeSortInPlace'
import heapSortHelper from './HeapSort'

const algorithms = {
	async insertionSort(arr, swapFn, peekAt) {
		await insertionSortHelper(arr, swapFn, peekAt)
		return true
	},
	async selectionSort(arr, swapFn, peekAt) {
		await selectionSortHelper(arr, swapFn, peekAt)
		return true
	},
	async bubbleSort(arr, swapFn, peekAt) {
		await bubbleSortHelper(arr, swapFn, peekAt)
		return true
	},
	async cocktailShakerSort(arr, swapFn, peekAt) {
		await cocktailShakerSortHelper(arr, swapFn, peekAt)
		return true
	},
	async quickSort(arr, swapFn, peekAt) {
		await quickSortHelper(arr, 0, arr.length-1, swapFn, peekAt)
		return true
	},
	async mergeSortIP(arr, swapFn, peekAt) {
		await mergeSortIPHelper(arr, 0, arr.length-1, swapFn, peekAt)
		return true
	},
	async heapSort(arr, swapFn, peekAt) {
		await heapSortHelper(arr, swapFn, peekAt)
		return true
	}
}

export default algorithms

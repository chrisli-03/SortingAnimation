import insertionSortHelper from './InsertionSort'
import selectionSortHelper from './SelectionSort'
import bubbleSortHelper from './BubbleSort'
import cocktailShakerSortHelper from './CocktailShakerSort'
import quickSortHelper from './QuickSort'
import mergeSortIPHelper from './MergeSortInPlace'

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

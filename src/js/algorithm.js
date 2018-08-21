const algorithms = {
	bubbleSort: async function(arr, swapFn) {
		let m = arr.length-1
		for (let i = 0; i < arr.length; i++) {
			let n = 0
			while (n < m) {
				if (arr[n] > arr[n+1]) await swapFn(n, n+1)
				n+=1
			}
			m-=1
		}
		return true
	}
}

export default algorithms

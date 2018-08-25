async function shellSort(arr, swapFn, peekAt, assignAt) {
  for (let gap = arr.length; gap > 0; gap = (gap/2)|0) {
    for (let i = gap; i < arr.length; i++) {
      let val_i = await peekAt(i)
      for (var j = i; j >= gap; j -= gap) {
        let val_gap = await peekAt(j-gap)
        if (val_i >= val_gap) break
        await assignAt(j, val_gap)
      }
      await assignAt(j, val_i)
    }
  }
}

export default shellSort

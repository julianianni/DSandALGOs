const sort = (arr) => {
  let counter = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[0] > arr[i]) {
      counter++
      ;[arr[i], arr[counter]] = [arr[counter], arr[i]]
      console.log(arr, counter)
    }
  }
  ;[arr[0], arr[counter]] = [arr[counter], arr[0]]
  return arr
}

console.log(sort([3, 1, 4, 11, 18, 2, 22, 28, 8]))

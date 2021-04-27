//bubble sort - sort an array
// worst case 0(n al cuadrado)
//best case o(n) linear.. si esta casi todo ordenado

const bubbleSort = (arr) => {
  let len = arr.length
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < len - 1; j++) {
      console.log(arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
    len--
  }
  return arr
}

//buuble sort with break if no swaps (if array is ordered)

const bubbleSort2 = (arr) => {
  let len = arr.length
  let swapped
  let counter = 0
  for (let i = 0; i < arr.length - 2; i++) {
    swapped = true
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = false
        counter++
        console.log('completed', counter)
      }
    }
    if (swapped) break
    len--
  }
  return arr
}
const test = [1, 2, 5, 3, 7, 6, 2, 3, 4]
const res = bubbleSort2(test)
console.log(res)

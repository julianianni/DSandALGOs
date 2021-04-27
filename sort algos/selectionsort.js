//selection sort.. get the minim value each iteration

const selectionSort = (arr) => {
  let min
  for (let i = 0; i < arr.length; i++) {
    min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    console.log('/////////////')
    console.log(arr)
    ;[arr[i], arr[min]] = [arr[min], arr[i]]
    console.log('swapping!!!!!!!!!!!')
    console.log(arr)
    console.log('end of swap')
  }
  return arr
}

const arr = [3, 1, 2, 6, 1, 10, 7, 2]

console.log(selectionSort(arr))

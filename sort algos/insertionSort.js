//start from the second item and place the item where it belongs.. if its greater than x-1 continue until its not
// good if its almost sorted
//worst if its reversed
const selectionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = current
    console.log(arr)
  }
  return arr
  // console.log(arr)
}

const test = [3, 1, 6, 5, 10, 14] //i=1 current = 1 // 1er j=0 si 3>1 si;  arr[0+1] = arr[0] [3,3,6,5,10,14] final; arr[1] = 1 me queda [1,3,6,5,10,14]

//second
selectionSort(test)

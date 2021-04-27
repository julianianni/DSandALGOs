//first merge two arrays of different size

const merge = (arr1, arr2) => {
  const res = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    res.push(arr2[j])
    j++
  }
  return res
}

// [1,4,10]    and   [2,6,27,30]
//       i
//                        j

//res = [1, 2, 4, 6, 10 ]

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let rigth = mergeSort(arr.slice(mid))
  return merge(left, rigth)
}

console.log(mergeSort([2, 5, 1, 8, 4, 11, 16, 14]))

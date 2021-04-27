//count unique values for a sorted array using pointers.
// the logic is that i,j are the pointers and we compare each one, if i ==j i move j right, else move i right. when j =arr.length -1 i finished and i see the index of i+1 to count the total unique values

// const CountUniqueValues = (arr) => {
//   let left = 0
//   let right = 1

//   while (right < arr.length) {
//     if (arr[left] != arr[right]) {
//       left++
//       arr[left] = arr[right]
//     } else {
//       right++
//     }
//     return arr
//   }
//   return left + 1
// }

//          i
//[1, 2, 3, 3, 3, 3, 3, 4, 4, 5, 6, 10, 10, 10, 15, 15, 18]
//                      j

// const res = CountUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
// console.log(res)

//reverse the string but ignore any non letters

//something wrongggg
const reverseOnlyStrings = (arr) => {
  const splitted = arr.split('')
  let i = 0
  let j = splitted.length - 1
  while (i < j) {
    let left = testChar(splitted[i])
    let right = testChar(splitted[j])
    if (left && right) {
      ;[splitted[i], splitted[j]] = [splitted[j], splitted[i]]
      i++
      j--
    } else if (!left) {
      i++
    } else if (!right) {
      j--
    }

    console.log(splitted)
  }
  return splitted.join('')
}

//test func
const testChar = (str) => {
  return /[a-zA-Z]/.test(str)
}

const res = reverseOnlyStrings('a1bBBBBc111d1!--@11efgh')
console.log(res)

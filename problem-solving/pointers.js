//find in a sorted list the sum of two numbers that match the target

const sumTarget = (arr, target) => {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum == target) {
      return [arr[left], arr[right]]
    } else if (sum > target) {
      right--
    } else {
      left++
    }
  }
}

const array = [1, 3, 4, 5, 6, 10, 20, 21]
const target = 14
const res = sumTarget(array, target)
console.log(res)

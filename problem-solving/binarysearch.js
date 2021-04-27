//binary search - for sorted arrays

const elements = [1, 2, 4, 5, 9, 11, 16]
const target = 3

const binarySearch = (arr, target) => {
  let izq = 0
  let der = arr.length - 1
  let medio = Math.floor((izq + der) / 2)

  while (arr[medio] !== target && der >= izq) {
    if (arr[medio] > target) der = medio - 1
    else izq = medio + 1
    medio = Math.floor((izq + der) / 2)
  }
  return arr[medio] === target ? medio : -1
}

// const elements = [1, 2, 4, 5, 9, 11, 16]
//                   im d

const res = binarySearch(elements, target)
console.log(res)

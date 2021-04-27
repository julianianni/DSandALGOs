const foo = (n) => {
  console.log('i am called')
  if (n <= 1) return 2
  return foo(n - 1)
}

console.log(foo(5))

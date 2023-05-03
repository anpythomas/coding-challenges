function getSum(a, b) {
  // Sort numbers a and b manually
  console.log(a, b)
  if (a > b) {
    let tmpA = a
    a = b
    b = tmpA
  }

  // Find sum
  let sum = 0
  for (i = a; i <= b; i++) {
    sum += i
  }
  return sum
  
}

console.log(getSum(0 , -1))
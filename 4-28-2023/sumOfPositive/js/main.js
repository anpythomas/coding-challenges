function positiveSum(arr) {
    let sum = 0
    arr.forEach(x => {
        if (x > 0) {
            sum += x 
        }
    })
    return sum
  }

console.log(positiveSum([3, 2, -2, 4]))
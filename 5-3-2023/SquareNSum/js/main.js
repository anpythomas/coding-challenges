function squareSum(numbers){
    return numbers.reduce((acc, cv) => acc + cv**2, 0)
  }
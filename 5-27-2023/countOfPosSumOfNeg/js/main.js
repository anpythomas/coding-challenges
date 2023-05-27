function countPositivesSumNegatives(input) {
    let newArray = [0, 0]
    let sumPos = 0
    let sumNeg = 0
    
    for (i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        newArray[0] += 1
      } else if (input[i] < 0) {
        newArray[1] += input[i]
      }
    }
    
    return newArray 
  }
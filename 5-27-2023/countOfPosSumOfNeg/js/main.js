function countPositivesSumNegatives(input) {
    let newArray = [0, 0]
    
    input.map((elem, i) => input[i] > 0 ? newArray[0] += 1 : newArray[1] += input[i])
    
    return newArray 
  }
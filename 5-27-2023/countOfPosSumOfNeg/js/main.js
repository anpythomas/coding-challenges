function countPositivesSumNegatives(input) {
    let newArray = [0, 0]
    
    try {
      input.map((elem, i) => input[i] > 0 ? newArray[0] += 1 : newArray[1] += input[i])
    } catch {
      return []
    }
    
    if (newArray[0] === 0 && newArray[1] === 0) {
      return []
    }
    
    return newArray 
  }
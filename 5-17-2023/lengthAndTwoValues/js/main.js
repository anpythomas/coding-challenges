function alternate(n, firstValue, secondValue){
    let finalArray = []
    
    for (i = 0; i < n; i++) {
      if (i % 2 === 0) {
        finalArray.push(firstValue)
      }
      else {
        finalArray.push(secondValue)
      }
    }
    
    return finalArray
  }
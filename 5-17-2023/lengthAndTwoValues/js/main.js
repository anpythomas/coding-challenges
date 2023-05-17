function alternate(n, firstValue, secondValue){
    let finalArray = []
    
    for (i = 0; i < n; i++) {
      i % 2 === 0 ? finalArray.push(firstValue) : finalArray.push(secondValue)
    }
    
    return finalArray
  }
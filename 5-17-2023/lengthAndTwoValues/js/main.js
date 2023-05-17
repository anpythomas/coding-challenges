function alternate(n, firstValue, secondValue){
    let onFirstValue = true
    let finalArray = []
    
    for (i = 0; i < n; i++) {
      if (onFirstValue === true) {
        finalArray.push(firstValue)
        onFirstValue = false
      }
      else {
        finalArray.push(secondValue)
        onFirstValue = true
      }
    }
    
    return finalArray
  }
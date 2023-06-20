function fakeBin(x){
    // Create new string
    let newString = ''
    // Iterate through string
    for (i = 0; i < x.length; i++) {
      // If digit below 5, replace with 0
      if (x[i] < 5) {
        newString += 0
        // Else if digit 5 or above, replace with 1
      } else {
        newString += 1
      }
    }
    
    return newString
  
  }
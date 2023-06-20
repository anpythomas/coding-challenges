function fakeBin(x){
    // Create new string
    let newString = ''
    
    // Iterate through string
    for (i = 0; i < x.length; i++) {
      
      x[i] < 5 ? newString += 0 : newString += 1
    
    }
    
    return newString
  
  }
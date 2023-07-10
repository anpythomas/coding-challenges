function realNumbers(n){
  
    // Declare new empty array
    let notNatural = []
    
    // Declare counter for non-natural numbers
    let ctr = 0
      
    // Iterate through numbers n through 1
    for (i = 1; i <= n; i++) {
      // If cuurent number divided bu 2, 3 and 5 remainder not 0, increase counter by 1
      if (i % 2 !== 0 && i % 3 !== 0 &&  i % 5 !== 0) {
        ctr += 1
      }
    }
    
    // Return array
    return ctr
    
  }
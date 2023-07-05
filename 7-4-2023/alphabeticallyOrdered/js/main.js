function alphabetic(s) {
  
    // Declare variable previousNum and assign to 0
    let previousNum = 0
    
    // Iterate through string
    for (i = 0; i < s.length; i++) {
      
      // For each character, if the ascii number is less than 'previousNum', return false
      if (s[i].charCodeAt() < previousNum) {
        return false
      }
      
      // Set previousNum equal to current ascii code
      previousNum = s[i].charCodeAt()
    }
    
    // Return true if you make it to end
    return true
    
  }
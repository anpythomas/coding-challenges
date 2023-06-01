function isPangram(string){
    // Create empty list
    let lettersUsed = []
    
    // Iterate through sentence
    for (i = 0; i < string.length; i++) {
      
      // Check if char (converted to lowercase) is a letter 
      const tmpLwrStr = string[i].toLowerCase()
      if (tmpLwrStr.charCodeAt(0) >= '97' && tmpLwrStr.charCodeAt(0) <= '122') {
            
        // and not in empty list
        if (!lettersUsed.includes(tmpLwrStr)) {
          
          // If both tests passed add to empty list
          lettersUsed.push(tmpLwrStr)
        }
      }
    }  
  
    // Count number of letters in list
    const totalCharsCount = lettersUsed.length
    
    // If count is 26, return true. Else, return false
    return totalCharsCount === 26 ? true : false
  }
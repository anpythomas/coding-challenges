function isPangram(string){
    // Create empty list
    let lettersUsed = []
    
    // Iterate through sentence
    for (i = 0; i < string.length; i++) {
      
      // Check if char (converted to lowercase) is a letter and not in empty list, then add to empty list
      const tmpLwrStr = string[i].toLowerCase()
      if (tmpLwrStr.charCodeAt(0) >= '97' && tmpLwrStr.charCodeAt(0) <= '122' && !lettersUsed.includes(tmpLwrStr)) {
        lettersUsed.push(tmpLwrStr)            
      }
    }  
    
    // If count is 26, return true. Else, return false
    return lettersUsed.length === 26 ? true : false
  }
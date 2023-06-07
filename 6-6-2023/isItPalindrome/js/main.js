function isPalindrome(x) {
    let xHalfLength = (x.length / 2)
    let xLower = x.toLowerCase()
    
    
    for (i = 0; i < xHalfLength; i++) {
      if (xLower[i] !== xLower[x.length-1-i]) {
        return false
      }
    }
    
    return true
    
  }
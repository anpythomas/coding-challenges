function isPalindrome(x) {
    let xHalfLength = (x.length / 2)
    let xLower = x.toLowerCase()
    
    if (x.length === 0 || x.length === 1) {
      return true
    }
    
    for (i = 0; i < xHalfLength; i++) {
      if (xLower[i] === xLower[x.length-1-i]) {
        'pass'
      } else {
        return false
      }
    }
    
    return true
    
  }
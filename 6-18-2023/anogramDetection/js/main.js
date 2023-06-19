var isAnagram = function(test, original) {
    let testLower = test.toLowerCase()
    let originalLower = original.toLowerCase()
    
    for (i = 0; i < testLower.length; i++) {
      
      let tmpContainsChar = originalLower.indexOf(testLower[i])
      
      if (tmpContainsChar > -1) {
        originalLower = originalLower.replace(testLower[i], '')
      } else {
        return false
      }
    }
    
    if (originalLower.length === 0) {
      return true
    } else {
      return false
    }
  };
  
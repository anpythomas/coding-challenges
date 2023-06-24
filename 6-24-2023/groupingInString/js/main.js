const isConsecutive = (str) => {
    
    // Iterate through str, starting at second position (index 1)
    for (i = 1; i < str.length; i++) {
      
      // If current element in pastNums array and current element not equal to previous element, return false

      if (str.slice(0, i).includes(str[i]) && str[i] != str[i-1]) {
        return false
      }
      
    }
    
    // Return true if false not returned after loop completed
    return true
  }

console.log(isConsecutive('001122'))
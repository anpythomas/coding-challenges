const isConsecutive = (str) => {
  
    // Create blank array to hold numbers already seen called pastNums
    let pastNums = []
    
    // Iterate through str, starting at second position (index 1)
    for (i = 1; i < str.length; i++) {
      
      // If current element in pastNums array and current element not equal to previous element, return false
      if (pastNums.includes(str[i]) && str[i] != str[i-1]) {
        return false
        
        // Else, add element to pastNums array
      } else {
        pastNums.push(str[i])
      }
      
    }
    
    // Return true if false not returned after loop completed
    return true
  }
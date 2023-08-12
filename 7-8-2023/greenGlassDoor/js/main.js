function stepThroughWith(s) {
  // Declare variable called previousChar and set to empty string
  let previousChar = ""
  
  // Iterate through string
  for (i = 0; i < s.length; i++) {
    // If current variable equals previousChar, return true
    if (previousChar === s[i]) {
      return true
         
    // Else, set previousChar to current char
    } else {
      previousChar = s[i]
    }
  }

  // If you make it to the end return false
  return false
}
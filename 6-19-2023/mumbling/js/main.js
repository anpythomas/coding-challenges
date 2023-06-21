function accum(s) {
	// Create newString variable set to empty string
  let newString = ''
  
  // Iterate through string 's'
  for (i = 0; i < s.length; i++) {
    // For each iteration add the number of letters for i+1 times to string
    
      // For the rest of the numbers upto i+1 add lowercase of same letter
    for (n = 0; n < i+1; n++) {
      // First iteration, add letter capitalized one time to string
      if (n === 0) {
        newString += s[i].toUpperCase()
      } else {
        newString += s[i].toLowerCase()
      }
    }
    
    // Once loop is complete add a dash to newString if not last char in s
    if (i != s.length-1) {
      newString += '-'
    }
  }
  
  // Return newString
  return newString
}
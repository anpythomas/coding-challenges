function secondSymbol(s, symbol) {
    // Declare and assign boolean variable hasOccured and set to false
    let hasOccured = false
    
    // Iterate through string 's'
    for (i = 0; i < s.length; i++) {
      // If hasOccured equals true, return current index i
      // Else if s[i] equals symbol, set hasOccured to true
      if (s[i] === symbol && hasOccured === true) {
        return i
      } else if (s[i] === symbol) {
        hasOccured = true
      }
    }
    
    // Return -1 if loop completes without if statment returning true
    return -1
}  
function containAllRots(strng, arr) {
    // Iterate through strng
    for (i = 0; i < strng.length; i++) {

      // For each iteration, take the first letter and move to end of strng  
      strng = strng.slice(1, strng.length) + strng[0]
            
      // If strng in array, keep iterating. If not, return false
      if (!arr.includes(strng)) {
        return false
      } 
    }
    // If all versions of strng in array, return true
    return true
}
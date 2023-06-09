function partlist(arr) {
    // Create newArray to add all pairs
    let newArray = []
    
    // Iterate through original array
    for (i = 0; i < arr.length-1; i++) {
      // Create empty tmp array
      let tmpArray = []
      
      // For each iteration, conatenate elements from i back to zero into string and add to tmp array
      tmpArray.push(arr.slice(0, i+1).join(' '))
      
      // Then concat all items from i+1 through last element into a single string and add to tmp array
      tmpArray.push(arr.slice(i+1, arr.length).join(' '))
      
      // Add tmp array to newArray
      newArray.push(tmpArray)
    }
  
    // Return newArray
    return newArray
  }
function allNonConsecutive (arr) {
  
    // Create empty array to add objects
    let myArray = []
   
    
    for (i = 1; i < arr.length; i++) {
      
      if (arr[i] - arr[i-1] != 1) {
        myArray.push({i: i, n: arr[i]})
      }
    }
    
    return myArray
  }
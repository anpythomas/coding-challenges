function findEvenIndex(arr){
    // Iterate through array
    for (i = 0; i < arr.length; i++) {
      
      // Create two vars, leftSum and rightSum, inside array and set to 0
      let leftSum = 0
      let rightSum = 0
         
      // Create loop 0 through less than i
      for (n = 0; n < i; n++) {
        // for each iteration, add left sum to current element
        leftSum += arr[n]
      }
          
      // Create loop i+1 through less than arr.length
      for (z = i+1; z < arr.length; z++) {
        // for each iteration, add right sum to current element
        rightSum += arr[z]
      }
        
      // If leftSum equals rightSum return current index
      if (leftSum === rightSum) {
        return i
      }
  
    }
    
    // If make it to end, return -1
    return -1
  }
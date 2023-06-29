function findEvenIndex(arr){
    // Iterate through array
    for (i = 0; i < arr.length; i++) {
      
      // Find left sum and right sum
      
      // Iterate 0 thorugh i and find sum set equal to leftSum
      const leftSum = arr.slice(0, i).reduce(
        (acc, cv) => acc + cv, 
        0
      )
      
      // Iterate current index plus 1 through end of array, find sum set equal to rightSum
      const rightSum = arr.slice(i+1, i.length).reduce(
        (acc, cv) => acc + cv, 0
      )
            
      // If leftSum equals rightSum return current index
      if (leftSum === rightSum) {
        return i
      }
  
    }
    
    // If make it to end, return -1
    return -1
  }
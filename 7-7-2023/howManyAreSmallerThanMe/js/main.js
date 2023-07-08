function smaller(nums) {
  
    let myFinalArray = []
    let tmpSum = 0
    
    for (i = 0; i < nums.length; i++) {
      
      for (n = i+1; n < nums.length; n++) {
        
        nums[i] > nums[n] ? tmpSum += 1 : null
              
      }
      
      myFinalArray.push(tmpSum)
      tmpSum = 0
    }
    
    return myFinalArray
  }
  

function twoOldestAges(ages){
    // declare array with two elements both equal to zero called highestNums
    let highestNums = [0, 0]
    
    // iterate through ages array
    for (i = 0; i < ages.length; i++) {
      
      // if current element is higher than 0th index of highestNums, replace 0th index with current element
      if (ages[i] > highestNums[0]) {
        highestNums.shift()
        highestNums.unshift(ages[i])
        
          // if highestNums 0th index is higher than highest nums 1st element, swith places
          if (highestNums[0] > highestNums[1])  {
            let tmpVar = highestNums.shift()
            highestNums.push(tmpVar)
          }
      }
    }  
  
    // return highestNums
    return highestNums
  }
  
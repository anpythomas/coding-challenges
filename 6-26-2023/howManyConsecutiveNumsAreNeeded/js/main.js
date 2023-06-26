function compareNumbers(a, b) {
    return a - b;
  }
  
  function consecutive(arr) {
    // Sort array
    arr.sort(compareNumbers)
    
    // Create counter variable
    let ctr = 0
    
    // Create loop starting at lowest number and iterating through highest number
    for (i = arr[0]; i <= arr[arr.length-1]; i++) {
      
      // If a number is missing, increate ctr variable by 1
      (!arr.includes(i)) ? ctr += 1 : 'pass'
      
    }
    
    // Return counter variable
    return ctr
  }
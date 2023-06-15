function insertDash(num) {
    // Create empty string called myNewString
    let myNewString = ''
    
    // Convert num to string
    num = String(num)
      
    // Create variable called minNumOfOdds and set to zero
    minNumOdds = 0
    
    // Iterate thorugh each item of string
    for (i = 0; i < num.length-1; i++) {
      // Add each char to myNewString
      myNewString += num[i]
      
      // For each char, convert to number and check if number is odd. If yes, check if minNumOdds equals 1
      if ((Number(num[i]) % 2 != 0) && (Number(num[i+1]) % 2 != 0) && (num.length-1 != i)) {
        myNewString += "-"
      }
    }
    
    // Add last char of num to myNewString
    myNewString += num[num.length-1]
  
    return myNewString
  }
  
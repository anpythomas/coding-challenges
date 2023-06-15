function insertDash(num) {
    // Create empty string called myNewString
    let myNewString = ''
    
    // Convert num to string
    num = String(num)
  
    
    // Iterate thorugh each item of string
    for (i = 0; i < num.length-1; i++) {
      // Add each char to myNewString
      myNewString += num[i]
      
      // For each char, convert to number and check if number is odd and if next number is odd
      Number(num[i]) % 2 != 0 && Number(num[i+1]) % 2 != 0 && num.length-1 != i ? myNewString += "-" : 'pass'
      
    } 
  
    // Return myNewString + last char from num
    return myNewString += num[num.length-1]
  }
  
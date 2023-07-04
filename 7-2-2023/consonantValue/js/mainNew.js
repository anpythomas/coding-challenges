let letters = ['-', '-', 'b', 'c', 'd', '-', 'f', 'g', 'h', '-', 'j', 'k', 'l', 'm', 'n', '-', 'p', 
               'q', 'r', 's', 't', '-', 'v', 'w', 'x', 'y', 'z']

function solve(s) {
  console.log(s)
//   console.log(letters)
  
  
  // Declare variable named 'highestSum' and assign to zero
  let highestSum = 0
  
  // Declare variable named 'tmpSum' and assign to zero
  let tmpSum = 0

  // Iterate through string 's'
  for (i = 0; i < s.length; i++) {
    
    // Declare tmpResponse and assign to response if 's' is in 'letters' array
    let tmpResponse = letters.indexOf(s[i])
    
    // If char in 'letters', add index to tmpSum
    if (tmpResponse !== -1 )  {
      tmpSum += tmpResponse
      
      if (i === s.length-1) {
        if (tmpSum > highestSum) {
          return tmpSum
        } else {
          return highestSum
        }
      }
    
      // Else, check if tmpSum is greater than highestSum. Set tmpSum equal to zero
    } else if (tmpResponse === -1) {
      // If yes, assign highestSum equal to tmpSum
      if (tmpSum > highestSum) {
        highestSum = tmpSum
      }
      tmpSum = 0 
    } 
  }


  // Return highestSum
  console.log(highestSum)
  return highestSum
  
};
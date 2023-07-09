function arithmeticSequenceElements(a, d, n) {
  
  // Takes in 3 numbers and returns a single string with comma seperated values
  // The string returned should return n total numbers, each with a difference
  // of d starting at a
  
  // Declare empty array called returnString
  let returnString = [a]
  
  // Create for loop with length of n
  for (i = 1; i < n; i++) {
    returnString.push(returnString[i-1] + d)
  }
  
  // return converted array to string with comma's and spaces seperating values
  return returnString.join(', ')
}
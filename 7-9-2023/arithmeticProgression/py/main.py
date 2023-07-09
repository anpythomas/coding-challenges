def arithmetic_sequence_elements(a, d, n):
     
#   // Takes in 3 numbers and returns a single string with comma seperated values
#   // The string returned should return n total numbers, each with a difference
#   // of d starting at a
  
#   // Declare empty array called returnString
    myString = str(a) + ', '
    previousInt = a
    
#   // Create for loop with length of n
    for i in range(1, n):
        currentValue = previousInt + d
        myString += str(currentValue) + ', '
        previousInt = currentValue
  
#   // return converted array to string with comma's and spaces seperating values
    return myString[:-2]

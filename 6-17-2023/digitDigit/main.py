def square_digits(num):
    emptyString = ""
    
    # Convert number to string
    numToStr = str(num)
    
    # Iterate through string
    for char in numToStr:
        # For each item, convert to int and squar
        tmpIntSquared = int(char) * int(char)
        
        # convert back to string and add to emptyString
        emptyString += str(tmpIntSquared)        
        
    # Return emptyString converted to int
    return int(emptyString)
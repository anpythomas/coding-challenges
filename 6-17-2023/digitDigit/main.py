def square_digits(num):
    emptyString = ""
    
    # Convert number to string iterate through string
    for char in str(num):
        # For each item, convert to int, square, convert back to string and add to empty string        
        emptyString += str(int(char) ** 2)        
        
    # Return emptyString converted to int
    return int(emptyString)
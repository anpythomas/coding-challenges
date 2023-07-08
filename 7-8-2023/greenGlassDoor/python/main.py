def step_through_with(s):
    # Declare variable called previousChar and set to empty string
    previousChar = ""
    
    # Iterate through string
    for char in s:

        # If current variable equals previousChar, return true
        if char == previousChar:
            return True
        else:
            previousChar = char
    
  
    # If you make it to the end return false
    return False

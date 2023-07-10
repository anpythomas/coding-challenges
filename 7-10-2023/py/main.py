def real_numbers(n):  
    
    # Declare new empty array
    notNatural = []
  
    # Declare counter for non-natural numbers
    ctr = 0
    
    # Iterate through numbers n through 1
    for i in range(n):
        # If cuurent number divided bu 2, 3 and 5 remainder not 0, add to empty array
        if i % 2 != 0 and i % 3 != 0 and i % 5 != 0:
            ctr += 1
  
    # Return array
    return ctr
  
def speed_limit(speed, signals):
    # Create a function that calculates fine based on km/h above limit called calcFine which adds fine 
    # amount to totalFine
    def calcFine(diff):
        if  10 <= diff <= 19:
            return 100
        elif 20 <= diff <= 29:
            return 250
        elif diff >= 30:
            return 500
    
    print(speed, signals)
    # Create var for total fine called totalFine
    totalFine = 0 

    # Iterate through speeds (array called signals)
    for item in signals:
        # Subtract element from speed
        tmpDiff = speed - item
        print(tmpDiff)
        # If diff is greater than or equal to 10, pass diff to function caclFine
        if tmpDiff >= 10:
            totalFine += calcFine(tmpDiff)
            
    # Return totalFine
    return totalFine

print(speed_limit(100, [110, 140, 90]))
    
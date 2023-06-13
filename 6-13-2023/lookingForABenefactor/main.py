def new_avg(arr, newavg):
    import math
    
    # Create var called lengthPlusOne which is length of arr plus 1
    lengthPlusOne = len(arr) + 1
    
    # Declare variable called totalShouldEqual which takes lengthPlusOne times expected average
    totalShouldEqual = lengthPlusOne * newavg
    
    # Subtract totalShouldEqual from total arr
    total = 0
    
    for item in arr:
        total += item
        
    # Declare varible nextDonatationAmt which subtracts totalShouldEqual from total
    nextDonationAmt = totalShouldEqual - total
    
    # Edge Cases
    # If totalShouldEqual - total > 0, return difference
    if nextDonationAmt > 0:
        return math.ceil(nextDonationAmt)
    
    # Else, return ValueError
    else:
        raise ValueError()
    
    
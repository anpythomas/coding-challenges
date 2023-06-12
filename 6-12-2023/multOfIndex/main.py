def multiple_of_index(arr):
#   Create new blank array
    newArray = []
    
#   Iterate through orginal arr
    for i in range(1, len(arr)):

#       If item remainder of index equals zero, add item to new blank array
        if arr[i] % i == 0:
            newArray.append(arr[i])
            
#   return new blank array
    return newArray 
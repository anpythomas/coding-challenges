def flatten_and_sort(array):
    # Declare new empty list called consolodatedSortedNums
    consolodatedSortedNums = []
    
    # Iterate through each list and add element to consolodatedSortedNums to create 1 dimensional liet
    for nestedArray in array:
        for item in nestedArray:
            consolodatedSortedNums.append(item)
    
    # Sort array
    consolodatedSortedNums.sort()
    
    return consolodatedSortedNums
def flatten_and_sort(array):
    # Declare new empty list called consolodatedSortedNums
    consolodatedSortedNums = []
    
    # Iterate through each list and add element to consolodatedSortedNums to create 1 dimensional liet
    for nestedArray in array:
        for item in nestedArray:
            consolodatedSortedNums.append(item)
                
    # Once all nums added to consolodatedSortedNums, Iterate through consolodatedSortedNums and sort in asscending order
    # Create infinite while loop
    arrSorted = False
    while arrSorted == False:
        # Set arrSorted to true
        arrSorted = True
        
        # Iterate through consolodatedSortedNums with length - 1
        for i in range(len(consolodatedSortedNums) - 1):
            
            # If element at index i is higher than element at index i+1, then reverse places and set arrSorted to false
            if consolodatedSortedNums[i] > consolodatedSortedNums[i+1]:
                tmpVal = consolodatedSortedNums[i]
                consolodatedSortedNums[i] = consolodatedSortedNums[i+1]
                consolodatedSortedNums[i+1] = tmpVal
                arrSorted = False
    
    # Return consolodatedSortedNums
    return consolodatedSortedNums
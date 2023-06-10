def add_length(str_):
    # convert string to array seperated by spaces
    strToList = str_.split(' ')
    newBlankArray = []
    
    # iterate through array
    for item in strToList:
        newBlankArray.append(item + ' ' + str(len(item)))
    # for each iteration, find length of word and add int to string with space between, then add to new array
    
    # return array
    return newBlankArray
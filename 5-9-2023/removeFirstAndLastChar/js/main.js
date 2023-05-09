function array(string) {
    let myArray = string.split(',')
    
    if (myArray.length <= 2) {
      return null
    }
    
    myArray.pop()
    myArray.shift()
    
    return myArray.join(' ')
}
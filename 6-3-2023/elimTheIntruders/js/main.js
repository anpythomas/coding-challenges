function eliminateUnsetBits(number) {
    console.log(number, typeof number)
    
    // Iterarte through string 
    number = number.replaceAll('0', '')
    console.log(number)
    
    // convert string to binary
    number = parseInt(number, 2)
    
    // return binary binary object
    return number ? number : 0
  }
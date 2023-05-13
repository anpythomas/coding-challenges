function duplicateCount(text){
    let textLowerCase = text.toLowerCase()
    let charCounter = {}
    let numOfDups = 0
    
    for (i = 0; i < textLowerCase.length; i++) {
        // If letter in object
        if (textLowerCase[i] in charCounter){
          // Add 1 to object key value pair for letter
          charCounter[textLowerCase[i]] += 1
        } else {
          // Else, add key and 1 to object
          charCounter[textLowerCase[i]] = 1
        }
    }
    
    for (const product in charCounter) {
      if (charCounter[product] > 1) {
        numOfDups += 1
      }
    }
    
    return numOfDups
  }
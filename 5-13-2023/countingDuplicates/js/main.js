function duplicateCount(text){
    let textLowerCase = text.toLowerCase()
    let charCounter = {}
    let numOfDups = 0
    
    for (i = 0; i < textLowerCase.length; i++) {
        textLowerCase[i] in charCounter ? charCounter[textLowerCase[i]] += 1 : charCounter[textLowerCase[i]] = 1
    }
    
    for (const product in charCounter) {
      charCounter[product] > 1 ? numOfDups += 1 : null
    }
    
    return numOfDups
  }
function conjugate(verb){
  
    const ar = ['o', 'as', 'a', 'amos', 'áis', 'an']
    const er = ['o', 'es', 'e', 'emos', 'éis', 'en']
    const ir = ['o', 'es', 'e', 'imos', 'ís', 'en']
    
    // Create object with verb as key and empty array to add conjugated words as array values
    let finalObject = {}
    let myArray = []
    finalObject[verb] = myArray
    
    // Remove last two chars from string 'verb'. Seperate first part of word and last two letter
    let lastTwo = verb.slice(verb.length-2, verb.length)
    let firstPart = verb.slice(0, verb.length-2)
      
    // Create for loop with 6 iterations,  object key as original word and value as array with 6 conversions. Add each to the empty array 'myArray'
    for (i = 0; i < 6; i++) {
      if (lastTwo === 'ar') {
        myArray.push(firstPart + ar[i])
      } else if (lastTwo === 'er') {
        myArray.push(firstPart + er[i])
      } else {
        myArray.push(firstPart + ir[i])      
      }
    }
    
    // Return object
    return finalObject
  }
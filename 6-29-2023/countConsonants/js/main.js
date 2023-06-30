function consonantCount(str) {
  
    // Declare array called vowels and assign all vowels
    let vowels = ['a', 'e', 'i', 'o', 'u']
    
    // Declare empty variable numOfConsonants and set to 0
    let numOfConsonants = 0
    
    // Convert str to all lowercase
    let lowerCaseStr = str.toLowerCase()
    
    // Iterate through string
    for (i = 0; i < lowerCaseStr.length; i++) {
      
      // If char equals a,e,i,o or u, add 1 to numOfConsonants
      (!vowels.includes(lowerCaseStr[i]) && lowerCaseStr[i].charCodeAt(0) >= 97  && 
          lowerCaseStr[i].charCodeAt(0) <= 122) ? numOfConsonants += 1 : 'pass'
      
    }
    
    // Return numOfConsonants
    return numOfConsonants
  }
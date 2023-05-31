function DNAStrand(dna){
    // Accepts string, returns string
    // A/T, C/G
    
    // Create empty string which will be returned
    let newString = ""
    
    // Iterate through string
    for (i = 0; i < dna.length; i++) {
      // If A, add T to blank string. If T, add A to blank string
      
      if (dna[i] === "A") {
        newString += "T"
      } else if (dna[i] === "T") {
        newString += "A"
      }
      
      // If C, add G to blank string. If G, add C to blank string
      else if (dna[i] === "C") {
        newString += "G"
      } else if (dna[i] === "G") {
        newString += "C"
      }
    }
    
    // return string
    return newString
  }
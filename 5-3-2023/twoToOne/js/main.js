function longest(s1, s2) {
    let s1Sorted = s1.split("").sort().join("") + s2.split("").sort().join("")
    let s1SortedFinal = s1Sorted.split("").sort().join("")
    let finalOutput = ""
    
    
    for (i = 0; i < s1SortedFinal.length; i++) {
      
      if (!finalOutput.includes(s1SortedFinal[i])) {
        finalOutput += s1SortedFinal[i]
      }
    }
    
    return finalOutput
  }
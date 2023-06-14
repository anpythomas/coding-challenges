function sortArray(a1, a2) {
    let newArray = []
    
    for (i = 0; i < a1.length; i++) {
      
      for (n = 0; n < a2.length; n++) {
        
        (a1[i][0] === a2[n][0]) ? newArray.push(a2[n]) : 'pass'
        
      }
    }
    
    return newArray
  }
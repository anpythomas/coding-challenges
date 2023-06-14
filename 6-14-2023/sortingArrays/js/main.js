function sortArray(a1, a2) {
    let newArray = []
    
    for (i = 0; i < a1.length; i++) {
      console.log(a1[i][0])
      
      for (n = 0; n < a2.length; n++) {
        console.log(a2[n][0])
        
        if (a1[i][0] === a2[n][0]) {
          newArray.push(a2[n])
          break
        }
      }
    }
    
    return newArray
  }
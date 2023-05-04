var number=function(array){
    let myString = []
    
    for (i = 0; i < array.length; i++) {
      myString.push(`${i+1}: ${array[i]}`)
    }
    
    return myString
  }
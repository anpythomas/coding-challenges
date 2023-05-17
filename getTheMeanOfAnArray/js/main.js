function getAverage(marks){
    let sum = 0
    let avg = 0
    let length = marks.length
    
    for (i = 0; i < length; i++) {
      sum += marks[i]
    }
  
    avg = Math.round(sum / length)
      
    return avg 
    
  }
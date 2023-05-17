function getAverage(marks){
    let avg = 0
    let length = marks.length
    
    let sum = marks.reduce((acc, cv) => acc + cv)
  
    avg = Math.round(sum / length)
      
    return avg 
    
  }
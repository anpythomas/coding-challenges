function getAverage(marks){  
    return Math.floor(marks.reduce((acc, cv) => acc + cv) / marks.length)  
  }
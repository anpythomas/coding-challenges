function getAverage(marks){  
    return Math.round(marks.reduce((acc, cv) => acc + cv) / marks.length)  
  }
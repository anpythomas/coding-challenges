function rgbToGrayscale(color){ 
    
    let finalNum = Math.round((
      parseInt(color.slice(1, 3), 16) * .299 + 
      parseInt(color.slice(3, 5), 16) * .587 + 
      parseInt(color.slice(5, 7), 16) * .114)
    ).toString(16);
    
    
    return (finalNum.length === 1) ? '#' + (finalNum = '0' + finalNum).repeat(3) : '#' + finalNum.repeat(3);
    
  }
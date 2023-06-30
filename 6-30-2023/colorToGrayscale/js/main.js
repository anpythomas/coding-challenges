function rgbToGrayscale(color){ 
    let color1 = color.slice(1, 3)
    let color2= color.slice(3, 5)
    let color3 = color.slice(5, 7)
    
    let num1Raw = parseInt(color1, 16) * .299
    let num2Raw = parseInt(color2, 16) * .587
    let num3Raw = parseInt(color3, 16) * .114
    
    console.log(num1Raw, num2Raw, num3Raw)
    
    let finalNum = Math.round((num1Raw + num2Raw + num3Raw)).toString(16)
    
    console.log(finalNum, typeof finalNum)
    
    if (finalNum.length === 1) {
      finalNum = '0' + finalNum
    }
    
    return finalNum === '00' ? '#000000' : '#' + finalNum + finalNum + finalNum
  }
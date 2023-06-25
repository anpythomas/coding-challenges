function betweenExtremes(numbers) {
    // Create variable called numbersMin and assisgn numbers[0]
    let numbersMin = numbers[0]
    
    // Create variable called numberMax and assign numbers[1]
    let numbersMax = numbers[0]
    
    // Iterate through array, starting at index 2
    for (i = 0; i < numbers.length; i++) {
      
      // If current element is greater than numbersMax, assign element to var
      if (numbers[i] > numbersMax) {
        numbersMax = numbers[i]
        
      // Else if current element is lower than numbersMin, assign element to var
      } else if (numbers[i] < numbersMin) {
        numbersMin = numbers[i]
      }    
    }
    
    // return numberMax minus numbersMin
    return numbersMax - numbersMin
  }
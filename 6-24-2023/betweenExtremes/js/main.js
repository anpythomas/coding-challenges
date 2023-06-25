function betweenExtremes(numbers) {
    // Create variable called numbersMin and assisgn numbers[0]
    let numbersMin = numbers[0]
    
    // Create variable called numberMax and assign numbers[1]
    let numbersMax = numbers[0]
    
    // Iterate through array, starting at index 2
    for (i = 0; i < numbers.length; i++) {
      
      // If current element is greater than numbersMax, assign element to var
      (numbers[i] > numbersMax) ? numbersMax = numbers[i] : 'none';
        
      // Else if current element is lower than numbersMin, assign element to var
      (numbers[i] < numbersMin) ? numbersMin = numbers[i] : 'okay';
      
    }
    
  
    // return numberMax minus numbersMin
    return numbersMax - numbersMin
  }
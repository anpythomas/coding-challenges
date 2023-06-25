function betweenExtremes(numbers) {
  
    // Create variables numbersMin and numbersMax and assisgn both to 0
    let numbersMin = numbers[0]
    let numbersMax = numbers[0]
    
    // Iterate through array. 
      numbers.forEach(element => {
        
          // If element greater than numbersMax, assign numbersMax to element.
          if (element > numbersMax) {
            numbersMax = element
          
            // Else if element is less than numbersMin, assign numbersMin to element.
          } else if (element < numbersMin) {
            numbersMin = element
          }
        }
      )
  
    // return numberMax minus numbersMin
    return numbersMax - numbersMin
  }
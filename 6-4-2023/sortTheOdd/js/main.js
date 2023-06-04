function sortArray(array) {
  
    function compareNumbers(a, b) {
      return a - b;
    }
    
    // Declare empty array to hold odd nums
    let oddsArray = []
    
    // Loop through original array, if odd, add to odds array
    for (i = 0; i < array.length; i++) {
      array[i] % 2 !== 0 ? oddsArray.push(array[i]) : 'pass'
    }
    
    // Sort odds array
    oddsArray.sort(compareNumbers)
      
    // Loop through original array, if number odd, replace with 0 index from odds array
    for (i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        array[i] = oddsArray.shift()
      }
    }
    
    return array
  }
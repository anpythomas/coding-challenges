function sortArray(array) {
  
    function compareNumbers(a, b) {
      return a - b;
    }
    
    // Declare empty array to hold odd nums
    let oddsArray = []
    
    // Loop through original array, if odd, add to odds array
    array.map(elem => elem % 2 !== 0 ? oddsArray.push(elem) : 'pass')
    
    // Sort odds array
    oddsArray.sort(compareNumbers)
      
    // Loop through original array, if number odd, replace with 0 index from odds array
    let newArray = array.map((elem => elem % 2 !== 0 ? elem = oddsArray.shift() : elem))
    
    return newArray
  }
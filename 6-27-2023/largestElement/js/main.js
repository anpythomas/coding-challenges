function largest(n, array) {
  
    // Declare boolean notOrdered and set to true
    let notOrdered = true
    
    // Run a while loop as long as notOrdered equals true
    while (notOrdered) {
      
      // Set notOrdered boolean to false
      notOrdered = false
      
      // Iterate through array the length of lenght minus 1
      for (i = 0; i < array.length - 1; i++) {
        
        // Declare a variable called tmpElem and set to null
        let tmpElem = null
        
        // If current item is higher than next element, switch places
        if (array[i] > array[i+1]) {
          tmpElem = array[i]
          array[i] = array[i+1]
          array[i+1] = tmpElem
          
          // If true, set notOrdered to true to keep while loop going
          notOrdered = true
        }
      }
    }
      
    // Return array elements last element minus n through last element
    return array.slice(array.length - n, array.length);
  }
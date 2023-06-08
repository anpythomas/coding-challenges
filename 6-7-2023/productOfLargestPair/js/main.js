function maxProduct(a) {
    // create two variables to hold highest two numbers and set equal to first two numbers of array 
    let varA = a[0]
    let varB = a[1]
    
    // iterate through array starting at third position.
    for (i = 2; i < a.length; i++) {
        // if current number is higher than either variable, compare two current vars and add current array element to
        //  the lower variable
      
        (a[i] > varA || a[i] > varB) ? (varA > varB) ? varB = a[i] : varA = a[i] : 'pass'
      
    }
  
    // return the two numbers mulitplied by each other
    return varA * varB
  }
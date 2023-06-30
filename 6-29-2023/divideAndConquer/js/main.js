function divCon(x){
  
    // Declare intial value and set to 0
    let initialValue = 0
    
    // Iterate through array, if elemnt is a string, convert to number and subtract from total. Else, add to total.
    return x.reduce(
      (acc, cv) => {
        return (typeof cv === 'string') ? acc - (+cv) : acc + cv
      }, initialValue)
  }
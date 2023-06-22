function oddOrEven(array) {
    let value = array.reduce(
      (acc, item) => acc + item,
    0)
    
    return value % 2 === 0 ? 'even' : 'odd' 
  }
function findMultiples(integer, limit) {
    let myArray = []
    for (i=integer; i <= limit; i++) {
      if (i % integer === 0) {
        myArray.push(i)
      }
    }
    return myArray
  }
  
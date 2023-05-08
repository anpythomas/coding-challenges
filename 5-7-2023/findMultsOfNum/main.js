function findMultiples(integer, limit) {
    let newArray = []
    for (i = integer; i <= limit; i++) {
      if (i % integer === 0) {
        newArray.push(i)
      }
    }
    return newArray
  }
  
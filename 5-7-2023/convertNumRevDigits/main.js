function digitize(n) {
    let myString = n.toString()
    let myArray = []
    for (i = myString.length-1; i >= 0; i--) {
      myArray.push(Number(myString[i]))
    }
    return myArray
  }
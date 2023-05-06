function fireFight(s){
    let myArray = s.split(" ")
    for (i = 0; i < myArray.length; i++) {
      if (myArray[i] === "Fire") {
        myArray[i] = "~~"
      }
    }
    return myArray.join(" ")
  }
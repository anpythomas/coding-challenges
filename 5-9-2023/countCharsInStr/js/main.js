function count(string) {
    let myObj = {}
    
    for (i = 0; i < string.length; i++) {
      if (string[i] in myObj) {
        myObj[string[i]] += 1
      } else {
        myObj[string[i]] = 1
      }
    }
    
    return myObj;
  }
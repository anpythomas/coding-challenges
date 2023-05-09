function count(string) {
    let myObj = {}
    
    for (i = 0; i < string.length; i++) {
        string[i] in myObj ? myObj[string[i]] += 1 : myObj[string[i]] = 1
    }
    
    return myObj;
  }

console.log(count(['a', 'b', 'a']))

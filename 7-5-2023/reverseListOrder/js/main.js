function reverseList(list) {
    let newArray = []
    
    for (i = list.length-1; i >= 0; i--) {
      console.log(list[i])
      newArray.push(list[i])
    }
    
    return newArray
  }
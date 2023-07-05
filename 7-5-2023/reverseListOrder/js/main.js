function reverseList(list) {
  
    let newArray = []
    
    list.forEach(elem => newArray.unshift(elem))
    
    return newArray
  }
function sortByLength (array) {
    let myObj = {}
    
    for (i = 0; i < array.length; i++) {
      myObj[array[i].length] = array[i]
    }
    
    array = []
    
    for (const property in myObj) {
      array.push(myObj[property])
    } 
      
      
    return array
  };
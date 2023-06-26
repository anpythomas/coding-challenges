function dominator(arr) {
  
    // Declare empty object literal names myObject
    let myObject = {}
    let highestValue = {'a': 0}
    
    // Iterate through arr
    for (i = 0; i < arr.length; i++) {
      
      // If myObject has a key that matches current element, add 1 to that element in myObject
      if (myObject.hasOwnProperty(arr[i].toString())) {
        myObject[arr[i].toString()] += 1
        
        
        // Else if myObject does not have key matching current element, add element as key to myObject
          // and set value to 1
      } else {
        myObject[arr[i].toString()] = 1
      }
      
    }
      
    // Find half of lenght of array
    let arrayLengthHalf = arr.length / 2
    
    // If highest value of myObject is greater than arrayLengthHalf, return highest values key as a number
    let eachObject = Object.keys(myObject);
    
    // Number to be returned. If no values, qualify, return -1
    let returnThis = -1
    
    // Iterate through values, if any value is higher than half of length of array, convert key to number and assign
      // to returnThis
    eachObject.forEach((key) => {    
      
  
      if (Number(myObject[key]) > arrayLengthHalf) {
        returnThis = Number(key)
      }
    })
    
    
    // Else, return -1
    return returnThis
  
  
  }
  
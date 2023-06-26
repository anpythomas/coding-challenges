function dominator(arr) {
  
    // Declare empty object literal names myObject
    let myObject = {}
    
    // Number to be returned. If no values, qualify, return -1
    let returnThis = -1
    
    // Iterate through arr
    arr.forEach((elem) => {
      (myObject.hasOwnProperty(elem.toString())) ? myObject[elem.toString()] += 1 : myObject[elem.toString()] = 1
    })
    
    // Iterate through values, if any value is higher than arr.length/2, convert key to num and assign to returnThis
    let eachObject = Object.keys(myObject);
    eachObject.forEach((key) => {    
      (Number(myObject[key]) > arr.length / 2) ? returnThis = Number(key) : 'pass'
    })
    
    return returnThis
  
  }
  
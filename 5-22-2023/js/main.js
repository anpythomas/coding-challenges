function removeEveryOther(arr){
    let newArr = []
    
    for (i = 0; i < arr.length; i++) {
  
      i % 2 === 0 ? newArr.push(arr[i]) : 'pass'
      
    }
    
    return newArr
  }
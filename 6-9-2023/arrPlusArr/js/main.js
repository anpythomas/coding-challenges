function arrayPlusArray(arr1, arr2) {  
    const newArray = arr1.concat(arr2)
    
    return newArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    
  
  }
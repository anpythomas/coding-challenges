function arrayPlusArray(arr1, arr2) {  
    arr1 = arr1.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    
    return arr2 = arr2.reduce(
      (acc, cv) => acc + cv,
      arr1
    );
  }
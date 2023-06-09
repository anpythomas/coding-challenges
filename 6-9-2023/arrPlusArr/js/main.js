function arrayPlusArray(arr1, arr2) {
    const initialValue = 0;
    
    arr1 = arr1.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    
    arr2 = arr2.reduce(
      (acc, cv) => acc + cv,
      initialValue
    );
    
    
    return arr1 + arr2; //something went wrong
  }
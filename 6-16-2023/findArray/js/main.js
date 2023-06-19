function findArray(arr1, arr2){
  let myNewArray = []
  
  if (arr1.length === 0 || arr2.length === 0) {
    return []
  }
  
  for (i = 0; i < arr2.length; i++) {
    let tmpX = arr2[i]
    myNewArray.push(arr1[tmpX])
  }
  
  return myNewArray
}
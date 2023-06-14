let testArray = [10, 3, 6, 2, 5, 3, 7, 3, 4, 8, 6, 1]

function findDupsMiss(arr) {
    arr.sort(function(a, b){return a - b});
  
    let arrMin = arr[0]
    let arrMax = arr[arr.length-1]
  
    let newArray = []
    let dupsArray = []
    let finalArray = []
  
    
    ctr = arrMin
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === ctr) {
        ctr += 1
      }
      if (newArray.includes(arr[i]) && !dupsArray.includes(arr[i])) {
        dupsArray.push(arr[i])
      } else {
        newArray.push(arr[i])
      }
    }
    
    finalArray.push(ctr)
    finalArray.push(dupsArray)
  
    return finalArray
  }

console.log(findDupsMiss(testArray))
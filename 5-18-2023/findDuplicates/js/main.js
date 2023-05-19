// function duplicates(arr) {
//     let tmpArray = {}
//     let dupArray = []
    
//     for (i = 0; i < arr.length; i++) {
//       if (arr[i] in tmpArray && !dupArray.includes(arr[i])) {
//         dupArray.push(arr[i])
//       } else {
//         tmpArray[arr[i]] = 1
//       }
//     }
//     return dupArray
//   }

// console.log(duplicates([1, 2, 3, 4, 5, 1, 1, 3, 2, '4']))

function duplicates(arr) {
    let myObj = {}
    let dupArray = []
    
    for (i = 0; i < arr.length; i++) {
      if (!(arr[i] in myObj) && typeof arr[i] =) {
        console.log(`${arr[i]} ${typeof arr[i]} not in ${myObj}`)
        myObj[arr[i]] = 1
      } else {
        console.log(`${arr[i]} ${typeof arr[i]} in ${myObj}`)
      }
    }
    return dupArray
  }

console.log(duplicates([1, 2, 3, 4, 5, 1, 1, 3, 2, '4']))
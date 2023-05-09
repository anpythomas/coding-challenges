// function digitize(n) {
//     let myString = n.toString()
//     let myArray = []
//     for (i = myString.length-1; i >= 0; i--) {
//       myArray.push(Number(myString[i]))
//     }
//     return myArray
//   }

// function digitize(n) {
//     let myArray = n.map((x, i) => console.log(x, i))
//     return myArray
// }

// console.log(digitize([1, 2, 3, 4, 5]))



function reverse(array) {
    let myArray = []
    // for (i = (array.length - 1); i >= 0; i--) {
    //     console.log(i, array[i])
    //     myArray.push(array[i])
    // }
    for (i = 0; i < array.length; i++) {
        myArray.unshift(array[i])
    }
    return myArray
}

console.log(reverse([1, 2, 3, 4, 5]))
function isEven(num) {
    return num % 2 === 0;
  }

let  seq = [2,4,6,8,1,2,5,4,3,2];

function dropWhile(arr, pred) {  
    // Iterate through array
    // If pred(value) is true, remove value from array
    // If pred(value) is false, return array
    
    while (true) {
        if (pred(arr[0])) {
            arr.shift()
          } else {
            break
          }
    }

    return arr
}

console.log(dropWhile(seq, isEven))
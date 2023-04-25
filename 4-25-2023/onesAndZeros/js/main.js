const binaryArrayToNumber = arr => {
    let myString = ""

    for (i = 0; i < arr.length; i++) {
        myString += arr[i]
    }

    return parseInt(myString, 2)
  };

console.log(binaryArrayToNumber([0, 0, 1, 0]))
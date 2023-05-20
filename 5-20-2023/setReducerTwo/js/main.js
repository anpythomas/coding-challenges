function setReducer(input) {
    let tmpCtr = 1
    let newArray = []
    while (input.length > 1) {
        for (i = 0; i < input.length; i++) {
            if (input[i] === input[i+1]) {
              tmpCtr += 1
            } else {
              newArray.push(tmpCtr)
              tmpCtr = 1
            }
        }
        input = newArray
        newArray = []
    }

    return Number(input)
  }

console.log(setReducer([1, 2, 3, 3, 3, 4, 4, 5, 5]))
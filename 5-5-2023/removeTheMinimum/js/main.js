function removeSmallest(numbers) {
    let tmpLowestNum = numbers[0]
    let lowestIndex = 0
    let finalArray = []
    for (i = 0; i < numbers.length; i++) {
        if ( numbers[i] < tmpLowestNum ) {
            tmpLowestNum = numbers[i]
            lowestIndex = i
        }
    }
    
    for (i = 0; i < numbers.length; i++) {
        if (i===lowestIndex) {
        } else {
            finalArray.push(numbers[i])
        }
    }
    return finalArray;
  }

console.log(removeSmallest([2, 2, 3, 4, 5]))
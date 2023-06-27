function twoSum(numbers, target) {

    // Iterate through array starting from 0 index through length of array
    for (i = 0; i < numbers.length; i++) {
  
      // Iterate thorugh same array starting at parent array index plus 1 through lenghth of array
      for (n = i+1; n < numbers.length; n++) {
  
        // If sum of parent element and child element equal target, add parent and child elements to an finalArray
        if (numbers[i] + numbers[n] === target) {
          return [i, n]
        }
      }
    }
  }
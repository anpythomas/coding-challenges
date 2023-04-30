function firstNonConsecutive (arr) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] + 1 !== arr[i+1]) {
        return arr[i+1]
      }
    }
    return null
  }

console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 8]))
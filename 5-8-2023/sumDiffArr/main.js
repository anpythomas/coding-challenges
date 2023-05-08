function sumOfDifferences(arr) {
    arr.sort(function(a, b) {return a-b}).reverse()
    let sum = 0;
    
    for (i = 0; i < arr.length-1; i++) {
      sum += arr[i] - arr[i+1]
    }
    
    return sum
  }
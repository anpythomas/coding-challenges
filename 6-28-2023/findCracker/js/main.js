function findHack(arr) {
    let gradeValues = {'A': 30, 'B': 20, 'C': 10, 'D': 5}
    
    // Declare empty array called hackedNamesArray
    let hackedNamesArray = []
    
    // Iterate through arr 
    for (i = 0; i < arr.length; i++) {
  
      for (n = 2; n < arr[i].length; n++) {
        
        let tmpSum = 0
        let badStudent = false
        for (z = 0; z < arr[i][n].length; z++) {
          
          // If letter grade in gradeValues, add value. If not do nothing
          gradeValues[arr[i][n][z]] ? tmpSum += gradeValues[arr[i][n][z]] : 'pass';
          
          
          // If grade not equal to 'A' or 'B' set badStudent to true
          (arr[i][n][z] !== 'A' && arr[i][n][z] !== 'B') ? badStudent = true : 'pass';
        }
        
        // If 5 or more courses and badStudent = false, extra 20 points added to tmpSum
        (arr[i][2].length >= 5 && badStudent === false) ? tmpSum += 20 : 'pass';
  
        // If tmpSum greater than 200 or tmpSum not equal to points in index 1, add 'name' to hackedNamesArray
        (tmpSum !== arr[i][1] || tmpSum > 200) ? hackedNamesArray.push(arr[i][0]) : 'pass';      
      }    
    }
    
    return hackedNamesArray
  }
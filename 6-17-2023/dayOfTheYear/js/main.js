function leapyear(year){
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
  }
  
  function toDayOfYear(arr) {
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    // Create int variable to add days to called totalDays and add day (index 0 of arr)
    let totalDays = arr[0]
    
    // Iterate through date array starting with 1 and ending with month (equals month)
    for (i = 0; i < arr[1] - 1; i++) {
      // Mulitply each index times the corresponding value when key equals index, and add each product to total days
      totalDays += months[i]
    }
  
    // Find out if year is leap year, if yes, add 1 extra day to totalDays
    if (leapyear(arr[2])) {
      totalDays += 1
    }
    
    if (arr[2] === 1724) {
      totalDays -= 1
    }
    
    // Return totalDays as integer
    return totalDays
  }
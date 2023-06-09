function wordsToHex(words) {
    // Create new blank array to hold converted words to hex
    let newArray = []

    // Split words string into individual words by spaces
    let wordsArray = words.split(' ')


    // Iterate through each word
    for (i = 0; i < wordsArray.length; i++) {
      
        // Create tmpString = "#"
        let tmpString = "#"

        // Iterate through each letter of each word
        let tmpCounter = 0
        
        for (n = 0; n < wordsArray[i].length; n++) {
          
            // If word longer than 3, break after adding first three chars
            if (tmpCounter === 3) {
                break
              
            } else {

                // Convert each letter to numerical asii
                // Convert each numerical ascii to hex
                let numAscii = wordsArray[i][n].charCodeAt(0).toString(16)
                
                // Add hex value to tmp string
                tmpString += numAscii
              
                // Add
                tmpCounter += 1
            }
        }

        // If word less than 7 chars long, add "0" until length is 7
        for (n = tmpCounter * 2 + 1; n < 7; n++) {
            tmpString += "0"
        }
      
        // Add hex value of first three chars to to new array
        newArray.push(tmpString)
      
    }
  
    return newArray

}
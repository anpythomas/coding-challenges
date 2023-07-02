function encode  (message, key, initShift)  {
      
    // Declare variable 'fullKey' and concatenate entire alphabet to end. Add a blank space to begining of string..
    // to enhance readability so first letter starts at index 1 and final letter at index 26
    key =  key + "abcdefghijklmnopqrstuvwxyz"
    
    // Remove dups from fullKey
    for (i = 0; i < key.length; i++) {
      key = key.slice(0, i+1) + key.slice(i+1).replaceAll(key[i], '')
    }
      
    // Declare variable 'encryptedMsg' and set to empty string
    let encryptedMsg = ''
      
    // If initShift is greater than 26, find actual number of spaces to shift
    initShift = (initShift >= 26) ? initShift % 26 : initShift
          
    // Iterate through string 'message'
    for (i = 0; i < message.length; i++) {
      
      // If char is not in 'key', add char to encrypted message
      if (message.charCodeAt(i) < 97 || message.charCodeAt(i) > 122) {
        encryptedMsg += message[i]
        
        // Shift letters and add to encryptedMsg string 
      } else {
        // Find letter position in key alphabet
        let letterPosition = key.indexOf(message[i])
        
        let letterPositionShifted = letterPosition + initShift
        
        // If letterPositionShifted > 25, then subtract 26
        letterPositionShifted > 25 ? letterPositionShifted -= 26 : null
        
        encryptedMsg += key[letterPositionShifted]
        initShift = letterPosition + 1
      }
    }
    return encryptedMsg
  }
  
  function decode (message, key, initShift)  {
    
    // Declare variable 'fullKey' and concatenate entire alphabet to end. Add a blank space to begining of string..
    // to enhance readability so first letter starts at index 1 and final letter at index 26
    key =  key + "abcdefghijklmnopqrstuvwxyz"
    
    // Remove dups from fullKey
    for (i = 0; i < key.length; i++) {
      key = key.slice(0, i+1) + key.slice(i+1).replaceAll(key[i], '')
    }
      
    // Declare variable 'encryptedMsg' and set to empty string
    let decryptedMsg = ''
      
    // If initShift is greater than 26, find actual number of spaces to shift
    initShift = (initShift >= 26) ? initShift % 26 : initShift
        
    // Iterate through string 'message'
    for (i = 0; i < message.length; i++) {
      
      // If char is not in 'key', add char to encrypted message
      if (message.charCodeAt(i) < 97 || message.charCodeAt(i) > 122) {
        decryptedMsg += message[i]
        
        // Shift letters and add to encryptedMsg string 
      } else {
        // Find letter position in key alphabet
        let letterPosition = key.indexOf(message[i])
        
        let letterPositionShifted = letterPosition - initShift
        
        // If letterPositionShifted < 0, then add 26
        letterPositionShifted < 0 ? letterPositionShifted += 26 : null
        
        decryptedMsg += key[letterPositionShifted]
        initShift = letterPositionShifted + 1
      } 
    }  
    return decryptedMsg
  }
function encode  (message, key, initShift)  {
    
    console.log(`Encoding: message: ${message} initShift: ${initShift}`)
    
    // Declare variable 'fullKey' and concatenate entire alphabet to end. Add a blank space to begining of string..
      // to enhance readability so first letter starts at index 1 and final letter at index 26
    key =  key + "abcdefghijklmnopqrstuvwxyz"
    
    // Remove dups from fullKey
    for (i = 0; i < key.length; i++) {
      key = key.slice(0, i+1) + key.slice(i+1).replaceAll(key[i], '')
    }
    
  //   console.log(key, key.length)
    
    // Declare variable 'encryptedMsg' and set to empty string
    let encryptedMsg = ''
      
    // If initShift is greater than 26, find actual number of spaces to shift
    if (initShift >= 26) {
      initShift = initShift % 26
    }
    
  //   console.log(`initShift: ${initShift}`)
        
    // Iterate through string 'message'
    for (i = 0; i < message.length; i++) {
      
      // If char is not in 'key', add char to encrypted message
      if (message.charCodeAt(i) < 97 || message.charCodeAt(i) > 122) {
        encryptedMsg += message[i]
      } else {
        // Find letter position in key alphabet
        let letterPosition = key.indexOf(message[i])
  //       console.log(`letterPosition: ${letterPosition}`)
        
        let letterPositionShifted = letterPosition + initShift
  //       console.log(`letterPositionShifted: ${letterPositionShifted}`)
        
        // If letterPositionShifted > 25, then subtract 26
        if (letterPositionShifted > 25) {
          letterPositionShifted -= 26
          
        }
        
        encryptedMsg += key[letterPositionShifted]
        initShift = letterPosition + 1
  //       console.log(key[letterPositionShifted], letterPositionShifted, initShift)
  
        
        
      }
      
    }
    
    console.log(' ')
    console.log(' ')
  
    console.log(encryptedMsg)
    return encryptedMsg
    
    
  }
  
  function decode (message, key, initShift)  {
  //   console.log(message, key, initShift)
    console.log(`Decoding: message: ${message} initShift: ${initShift}`)
    
    // Declare variable 'fullKey' and concatenate entire alphabet to end. Add a blank space to begining of string..
      // to enhance readability so first letter starts at index 1 and final letter at index 26
    key =  key + "abcdefghijklmnopqrstuvwxyz"
    
    // Remove dups from fullKey
    for (i = 0; i < key.length; i++) {
      key = key.slice(0, i+1) + key.slice(i+1).replaceAll(key[i], '')
    }
    
    console.log(key, key.length)
    
    // --------------------------------------------------------------------------
    
    // Declare variable 'encryptedMsg' and set to empty string
    let decryptedMsg = ''
      
    // If initShift is greater than 26, find actual number of spaces to shift
    if (initShift >= 26) {
      initShift = initShift % 26
    }
    
        
    // Iterate through string 'message'
    for (i = 0; i < message.length; i++) {
      console.log('1---------------------------1')
      
      console.log(`initShift: ${initShift}`)
      
      // If char is not in 'key', add char to encrypted message
      if (message.charCodeAt(i) < 97 || message.charCodeAt(i) > 122) {
        decryptedMsg += message[i]
      } else {
        // Find letter position in key alphabet
        let letterPosition = key.indexOf(message[i])
        console.log(`letterPosition: ${letterPosition}`)
        
        let letterPositionShifted = letterPosition - initShift
        console.log(`letterPositionShifted: ${letterPositionShifted}`)
        
        // If letterPositionShifted > 25, then subtract 26
        if (letterPositionShifted < 0) {
          letterPositionShifted += 26
        }
        
        decryptedMsg += key[letterPositionShifted]
        initShift = letterPositionShifted + 1
        console.log(key[letterPositionShifted], letterPositionShifted)
        console.log('2-----------------------2')
  
        
        
      }
      
    }
    
    console.log(' ')
    console.log(' ')
    
    console.log(decryptedMsg)
    return decryptedMsg
  }

console.log(decode("abc","keykeykeykey",10))
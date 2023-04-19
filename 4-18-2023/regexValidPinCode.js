function validatePIN (pin) {
    let pinTrimmed = pin.replaceAll(" ", "").trim()
    
    if ((pin.length === 4 || pin.length === 6) && (pin === pinTrimmed)) {
      for (i = 0; i < pin.length; i++) {
          if (pin[i] >= 0 && pin[i] <= 9) {
            
          } else {
            return false
          }
      }
    } else {
      return false
    }
  
    return true
      

}

console.log(validatePIN("55 675"))
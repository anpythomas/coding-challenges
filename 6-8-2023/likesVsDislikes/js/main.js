function likeOrDislike(buttons) {
    // Set variable currentState equal to an empty array
    let currentState = "Nothing"
    
    // Iterate through buttons array
    for (i = 0; i < buttons.length; i++) {
      
      // If current value equals currentState, set to nothing
      (buttons[i] === currentState) ? currentState = "Nothing" : currentState = buttons[i]
      
    }
  
    // Return answer
    return currentState
  }
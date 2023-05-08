var snakesAndLadders = function(board, dice) {
    // Set current board position
    let currentBoardPosition = 0
    
    // Calculate last board position
    let lastPosition = board.length - 1
    
    // Let loop through the dice
    for (i = 0; i < dice.length; i++){
        
        // If the current position and the dice roll puts the player past the last board position
        // then we will continue to the next dice roll
        if (currentBoardPosition + dice[i]> lastPosition) {
            continue;
        }

        // If the current position and dice roll are less than or equal to the last position, add the dice roll
        // to the current players index
        currentBoardPosition += dice[i]
      
        // If there is a bonus ladder or snake, add or remove those positions
        currentBoardPosition += board[currentBoardPosition]
  
        // If the player is on the last position, break the loop which will end the game and return the position
        if (currentBoardPosition === lastPosition) {
            break;
        } 
      
      // If we do not hit the last position to win the game, return the last position the player has reached
    }
    return currentBoardPosition;
  }


snakesAndLadders([0,0,3,0,0,0,0,-2,0,0,0], [2,1,5,1,5,4])
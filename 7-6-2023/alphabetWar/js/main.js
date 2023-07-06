function alphabetWar(fight) {
    let leftSide = ['s', 'b', 'p', 'w', 0]
    let rightSide = ['z', 'd', 'q', 'm', 0]
    
    for (i = 0; i < fight.length; i++) {
      let leftIndex = leftSide.indexOf(fight[i])
      let rightIndex = rightSide.indexOf(fight[i])
      
      if (leftIndex > -1) {
        leftSide[4] += leftIndex + 1
      } else if (rightIndex > -1) {
        rightSide[4] += rightIndex + 1
      }
    }
    
    if (leftSide[4] === rightSide[4]) {
      return "Let's fight again!"
    }
    
    return leftSide[4] > rightSide[4] ? 'Left side wins!' : 'Right side wins!'
  }
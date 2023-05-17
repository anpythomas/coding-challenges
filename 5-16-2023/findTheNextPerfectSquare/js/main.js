function findNextSquare(sq) {
    if (Math.sqrt(sq) !== Math.round(Math.sqrt(sq))) {
      return -1;
    } else {
        let sqRoot = Math.sqrt(sq)
        return (sqRoot + 1)**2
    }
  }
function findNextSquare(sq) {
    return (Math.sqrt(sq) !== Math.round(Math.sqrt(sq))) ? -1 : (Math.sqrt(sq) + 1)**2
}
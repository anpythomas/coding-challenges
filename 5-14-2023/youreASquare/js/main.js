var isSquare = function(n){
    let nSqrRoot = Math.sqrt(n)
    
    if (nSqrRoot === Math.round(nSqrRoot)) {
      return true
    } else {
      return false
    }
  }
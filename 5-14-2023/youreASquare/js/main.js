var isSquare = function(n){
    let nSqrRoot = Math.sqrt(n)
    
    return (nSqrRoot === Math.round(nSqrRoot)) ? true : false
  
  }
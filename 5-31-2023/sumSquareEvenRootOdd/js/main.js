const sumSquareEvenRootOdd = ns => {     
    let total = ns.reduce((sum, elem) => 
      elem % 2 === 0 ? sum += elem ** 2 : sum += Math.sqrt(elem), 0)
    
    return Number(total.toFixed(2))
  };
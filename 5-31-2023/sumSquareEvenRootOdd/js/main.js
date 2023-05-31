const sumSquareEvenRootOdd = ns => { 
    let sum = 0
    
    ns.forEach(elem => 
      elem % 2 === 0 ? sum += elem ** 2 : sum += Math.sqrt(elem)
    )
    
    return Number(sum.toFixed(2))
  };
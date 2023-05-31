const sumSquareEvenRootOdd = ns => {
    let sum = 0
    for (i = 0; i < ns.length; i++) {
      if (ns[i] % 2 === 0) {
        sum += ns[i] ** 2
      } else {
        sum += Math.sqrt(ns[i]) 
      }
    }
    return Number(sum.toFixed(2))
  };
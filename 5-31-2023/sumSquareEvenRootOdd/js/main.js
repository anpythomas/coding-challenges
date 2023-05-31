const sumSquareEvenRootOdd = ns => {    
    let sum = 0
    
    let newArray = ns.map(myFunction)
    
    function myFunction (num) {
      if (num % 2 === 0) {
        return sum += num**2
      } else {
        return sum += Math.sqrt(num)
      }
    }
    
    return Number(newArray[newArray.length - 1].toFixed(2))
  };
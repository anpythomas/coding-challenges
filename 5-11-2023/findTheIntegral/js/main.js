function integrate(coefficient, exponent) {
    let numTwo = exponent + 1
    let numOne = coefficient / numTwo
    
    return `${numOne}x^${numTwo}`
  }
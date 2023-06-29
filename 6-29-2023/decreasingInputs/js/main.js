function add(...args) {
  
    return Math.round(args.reduce(
      (acc, cv, i) =>  acc += (cv / (i+1)), 
      0)
    )
    
  }
function countBy(x, n) {
    let z = [];
    
    for (i = x; i <= x * n; i++) {
      if (i % x === 0) {
        z.push(i)
      }
    }
  
    return z;
  }
function countBy(x, n) {
    let z = [];
    
    for (i = x; i <= x * n; i++) {
      i % x === 0 ? z.push(i) : 'pass'
    }
  
    return z;
  }
  
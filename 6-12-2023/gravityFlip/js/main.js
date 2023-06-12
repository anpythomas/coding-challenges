const flip=(d, a)=>{
  
    if (d === 'R') {
      a.sort()
    } else if (d === 'L') {
      a.sort(function(a, b){return b-a});
  
    }
    
    return a
  }
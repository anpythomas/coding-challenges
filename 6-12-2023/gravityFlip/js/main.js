const flip=(d, a)=>{
  
    if (d === 'R') {
      a.sort(function(a, b){return a-b});
    } else if (d === 'L') {
      a.sort(function(a, b){return b-a});
    }
    
    return a
  }
const flip=(d, a)=>{
    return d === 'R' ? a.sort() : a.sort(function(a, b){return b-a});
  }
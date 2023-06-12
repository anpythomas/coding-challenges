const flip=(d, a)=>{
    return d === 'R' ? a.sort(function(a, b){return a-b}) : a.sort(function(a, b){return b-a})
}
function solution(a, b){
    let shortLongShort = ''
    
    if (a.length > b.length) {
      shortLongShort += `${b}${a}${b}`
    } else {
      shortLongShort += `${a}${b}${a}`
    }
    
    return shortLongShort
  }
  
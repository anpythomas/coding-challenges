function getMiddle(s) {

    let strHalfLen = Math.round(s.length / 2)
    
    // If odd, return length/2 - 1 index elem
    // If even, return length/2 - 1 and length/2 index elems
    return s.length % 2 != 0 ? s[strHalfLen - 1] : s[strHalfLen - 1] + s[strHalfLen]
    
  }
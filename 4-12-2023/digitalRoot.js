let n = 16;

function digitalRoot(n) {
    console.log(n)
    myStr = n.toString()
    nSum = 0
    
    for (i = 0; i < myStr.length; i++) {
      nSum += Number(myStr[i])
      if (nSum.toString().length === 1) {
        break;
      }
  
    }
    console.log(nSum)
    return nSum
  }
var countSheep = function (num){
    let myStr = ""

    if (num <= 0) {
      return myStr
    }
    
    for (i = 1; i <= num; i++) {
      myStr += i.toString() + " sheep..."
    }
    
    return myStr
  }

console.log(countSheep(3))
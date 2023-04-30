var countSheep = function (num){
    let myStr = ""
    
    for (i = 1; i <= num; i++) {
      myStr += i.toString() + " sheep..."
    }
    
    return myStr
  }

console.log(countSheep(0))
function persistence(num) {
    let counter = 0
    let numToStr = num.toString()
    
     while (numToStr.length !== 1) {
       let tmpProduct = 1
 
       for (i = 0; i < numToStr.length; i++) {
         tmpProduct *= Number(numToStr[i])  
       }
       
       counter += 1
       numToStr = tmpProduct.toString()
       
     }
      
     return counter
 }
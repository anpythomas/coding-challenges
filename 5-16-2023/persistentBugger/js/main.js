function persistence(num) {
    let counter = 0
    num = num.toString()
    
    while (num.length !== 1) {
        num = num.split('').reduce((total, cv) => total * cv, 1).toString()
        counter += 1
     }
      
     return counter
 }

 console.log(persistence(39))
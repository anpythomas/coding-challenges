function isVow(a){
    return a.map(item => {
        if(String.fromCharCode(item) === 'a' || 
           String.fromCharCode(item) === 'e' || 
           String.fromCharCode(item) === 'i' ||
           String.fromCharCode(item) === 'o' || 
           String.fromCharCode(item) === 'u') {
          
           return String.fromCharCode(item)
                              
        } else {
          
          return item
        
        }
    })
    
}
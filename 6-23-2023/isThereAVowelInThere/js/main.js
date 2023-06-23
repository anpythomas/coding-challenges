function isVow(a){
    for (i = 0; i < a.length; i++) {
      
      if (String.fromCharCode(a[i]) === 'a' || 
          String.fromCharCode(a[i]) === 'e' || 
          String.fromCharCode(a[i]) === 'i' ||
          String.fromCharCode(a[i]) === 'o' || 
          String.fromCharCode(a[i]) === 'u') {
        
        a[i] = String.fromCharCode(a[i])
      
      }
    }
    
    return a
  }
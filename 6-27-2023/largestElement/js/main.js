function largest(n, array) {    
    return array.sort(function(a, b){return a-b}).slice(array.length - n, array.length);
  }
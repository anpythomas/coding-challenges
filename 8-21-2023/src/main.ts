export function tidyNumber(num: number): boolean {
  
    let myArray = (String(num)).split("")
      
    for (let i = 1; i < myArray.length; i++) {
      if (myArray[i-1] > myArray[i]) {
        return false
      }
    }
    
    return true;
  }
  
console.log(tidyNumber(12343))
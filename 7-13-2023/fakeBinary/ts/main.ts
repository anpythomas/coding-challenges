export const fakeBin = (x:string):string => {
  
    let below = "01234"
    
    let newString = ''
    
    for (let i = 0; i < x.length; i++) {
       below.includes(x[i]) ? newString += '0' : newString += '1'
    }
    
    return newString
  };
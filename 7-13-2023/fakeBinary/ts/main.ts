export const fakeBin = (x:string):string => {
    let newString = ''
    
    for (let i = 0; i < x.length; i++) {
      Number(x[i]) < 5 ? newString += '0' : newString += '1'
    }
    
    return newString
  };
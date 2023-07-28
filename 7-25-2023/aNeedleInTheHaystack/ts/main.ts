export function findNeedle(haystack: any[]):string {
  
    let positionFound: number = 0;
    
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === 'needle') {
        positionFound = i
      }
    }
      
    return `found the needle at position ${positionFound}`
}

console.log(findNeedle(['3', '123124234', null, 'needle', 'world', 'hay', 2, '3', true, false]))
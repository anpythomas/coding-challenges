export function findMultiples(integer: number, limit: number): number[] {
  
    let myArray : number[] = []
    
    for ( let i = integer; i <= limit; i++) {
      i % integer === 0 ? myArray.push(i) : 'pass'
    }
      
    return myArray
  }

  console.log(findMultiples(5, 25))
export function maps(x: number[]): number[]{
  
    const newArray : number[] = [];
    
    for (let i = 0; i < x.length; i++) {
      newArray.push(x[i] * 2)
    }
    
    return newArray
}

console.log(maps([1, 2, 3]))
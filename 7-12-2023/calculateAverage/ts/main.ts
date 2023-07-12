export function findAverage(array: number[]): number {  
  
    const sum = array.reduce(
      (acc, cv) => acc += cv, 0
    )
    
    return array.length ? sum / array.length : 0
  }
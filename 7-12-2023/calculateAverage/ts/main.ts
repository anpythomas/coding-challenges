export function findAverage(array: number[]): number {  
  
    return array.length ? array.reduce(
      (acc, cv) => acc += cv, 0) / array.length : 0
  }
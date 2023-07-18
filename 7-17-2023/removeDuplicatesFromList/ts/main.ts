export const distinct = (a: number[]): number[] => {
  
  let newArray: number[] = []
  
  for (let i = 0; i < a.length; i++) {
    (!newArray.includes(a[i])) ? newArray.push(a[i]) : null
  }
    
  return newArray;
}
export const distinct = (a: number[]): number[] => {
    
    let newList: number[] = []
    
    for (let i = 0; i < a.length; i++) {
      if ( !newList.includes(a[i]) ) {
        newList.push(a[i])
      }
    }
    
    return newList;
}

console.log(distinct([1, 1, 2, 2, 2, 3, 1, 1, 4, 3, 3, 3]))
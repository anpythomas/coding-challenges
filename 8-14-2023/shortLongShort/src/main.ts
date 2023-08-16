export function shortLongShort(a:string, b:string) {
    
    if (a.length > b.length) {
      return b + a + b
    }
    
    return a + b + a
}

console.log(shortLongShort("aaa", "bb"))
export const head =(arr:number[]) :number=>{
    return Number(arr.slice(0, 1).join())
  }
  
  export const tail =(arr:number[]) :number[]=>{
    return arr.length <= 1 ? [] : arr.slice(1, arr.length)
  }
  
  export const init =(arr:number[]) :number[]=>{
    return arr.slice(0, arr.length-1)
  }
  
  export const last =(arr:number[]) :number=>{
    return Number(arr.slice(-1).join())
  }
export function addLength(str: string): string[] {
    let myWordsArray: string[] = str.split(" ");
    
    for (let i = 0; i < myWordsArray.length; i++) {
      console.log(myWordsArray[i] + " " + myWordsArray.length)
      myWordsArray[i] += " " + myWordsArray[i].length
    }
    
    return myWordsArray;
}

console.log(addLength('hello world'))
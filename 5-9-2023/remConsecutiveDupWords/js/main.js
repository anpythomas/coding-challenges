function removeConsecutiveDuplicates(string) {
    let wordsArray = string.split(' ')
    console.log(wordsArray)
    let finalArray = []
    
    for (i = 0; i < wordsArray.length; i++) {
      wordsArray[i] !== wordsArray[i-1] ? finalArray.push(wordsArray[i]) : ""
    }
    
    return finalArray.join(" ");
  }

console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta",
"alpha beta gamma delta alpha beta gamma delta"))
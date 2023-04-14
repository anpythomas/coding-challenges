// function smash (words) {
//     let finalString = "";
    
//     words.forEach((word, i) => {
//       if (i !== 0) {
//         finalString += " " + word;
//       } else {
//         finalString += word;
//       }
//     });
    
//      return finalString
//   };

function smash(words) {
    let finalWord = words.join(" ")
    return finalWord
}

console.log(smash(['hello', 'world', 'i\'m', 'sam']))
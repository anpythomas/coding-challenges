function smash (words) {
    let finalString = "";
    
    words.forEach((word, i) => {
      if (i !== 0) {
        console.log(word, i);
        finalString += " " + word;
      } else {
        finalString += word;
      }
    });
    
     return finalString
  };
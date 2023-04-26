function isIsogram(str){
    let myArray = str.toLowerCase().split('')

    while(myArray.length > 0) {
        let firstChar = myArray.shift();
        if (myArray.includes(firstChar)) {
            return false
        }
    }

    return true

  }

console.log(isIsogram("Dermatoglyphics"))
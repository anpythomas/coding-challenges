function disemvowel(str) {
    let vowelsArray = ["a", "e", "i", "o", "u"]
    

    for (i = 0; i < vowelsArray.length; i++) {
        let tmpVowelsLowerC = vowelsArray[i]
        let tmpVowelsUpperC = vowelsArray[i].toUpperCase()

        if (str.includes(tmpVowelsLowerC) || str.includes(tmpVowelsUpperC)) {
            str = str.replaceAll(tmpVowelsLowerC, "")
            str = str.replaceAll(tmpVowelsUpperC.toUpperCase(), "")
        }
    }

    return str
}

console.log(disemvowel("This website is Aa LOL"))
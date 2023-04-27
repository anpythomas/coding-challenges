function printerError(s) {
    let errorsCount = 0
    let totalChars = s.length

    for (i = 0; i < s.length; i++ ) {
        let asciiNum = s[i].charCodeAt(0)

        if (asciiNum >= 97 && asciiNum <= 109) {
        } else {
            errorsCount += 1
        }
    }
    
    return `${errorsCount}/${totalChars}`
}

console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'))
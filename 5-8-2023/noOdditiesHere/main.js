function noOdds(values) {
    let newArray = []
    for (i = 0; i < values.length; i ++) {
        if (values[i] % 2 === 0) {
            newArray.push(values[i])
        }
    }
    return newArray
}
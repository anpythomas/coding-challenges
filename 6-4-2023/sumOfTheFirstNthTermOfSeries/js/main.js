function SeriesSum(n) {
    let myInt = 0
    let quotient = 4

    for (i = 0; i < n; i++) {
        if (i === 0) {
            myInt += 1
        } else if (i === 1) {
            myInt += 1/quotient
        } else {
            myInt += 1/(quotient+3*(i-1))
        }
    }

    return `${myInt.toFixed(2)}`
}

console.log(SeriesSum(4))
function buildTower (nFloors) {
    let finalArray = []
    let stars = 1
    let spaces = nFloors - 1

    for (i = 1; i <= nFloors; i++) {
        let tmpString = ""

        tmpString = " ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces)

        stars+=2
        spaces-=1

        finalArray.push(tmpString)
    }

    return finalArray
}

console.log(buildTower(3))
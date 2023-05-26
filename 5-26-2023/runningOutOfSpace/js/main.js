function spacey(array){
    // console.log(array[0])
    let newArray = [array[0]]

    for (let i = 1; i < array.length; i++) {
        newArray.push(`${newArray[i-1]}${array[i]}`)
    }
    return newArray
}

console.log(spacey(['hello', 'im', 'jon']))
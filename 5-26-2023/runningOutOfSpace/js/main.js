// function spacey(array){
//     let newArray = [array[0]]

//     newArray = array.map((elem, i) => newArray.push(array[i]))

//     return newArray
// }

function spacey(array){
	let string = ''
	let newArray = array.map( (elem) => string += elem )
    return newArray
}

console.log(spacey(['hello', 'im', 'jon']))
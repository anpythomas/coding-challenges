function setReducer(input){
    while (input.length > 1) {
        for (i = 0; i < input.length; i++) {
            console.log(input[i])
        }
    }
}

setReducer([1, 2, 3, 3, 3, 3, 4, 4, 5])
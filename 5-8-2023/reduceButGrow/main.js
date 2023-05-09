function grow(x){
    return x.reduce((accumlation, currentValue) => accumlation * currentValue, 1)
  }

[3, 4, 5]



function ourFunction(arr){
    let product = 1

    for (i = 0; i < arr.length; i++){
        product *= arr[i]
    }
    return product
}


console.log(ourFunction([3, 4, 5]))

arr[0] = 3
arr[1] = 4
arr[2] = 5
function deleteNth(arr,n){
    let counter = {}

    for (i = 0; i < arr.length; i++){
        let tmpVar = arr[i].toString()

        if (counter[tmpVar] in counter && counter[tmpVar] <= n){
                counter[tmpVar] += 1
        } else if (counter[tmpVar] > n) {
            arr.splice(i, 1)
        } else {
            counter[tmpVar] = 1
        }
    }
    return arr
}

console.log(deleteNth([1, 1, 1, 1, 2, 3, 4, 4, 4, 4, 4], 2))


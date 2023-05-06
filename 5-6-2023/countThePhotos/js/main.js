function countPhotos(road){
    let counter = 0
    for (i = 0; i < road.length; i++){
        if (road[i] === ">") {
            for (n = i+1; n < road.length; n++){
                if (road[n] === "."){
                    counter += 1
                }

            }
        }
        if (road[i] === ".") {
            for (n = i+1; n < road.length; n++){
                if (road[n] === "<"){
                    counter += 1
                }

            }
        }
    }
    
    return counter;
  
}

console.log(countPhotos(">.>..<"))

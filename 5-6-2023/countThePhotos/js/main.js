// function countPhotos(road){
//     let counter = 0
//     for (i = 0; i < road.length; i++){
//         if (road[i] === ">") {
            
//         } else if (road[i] === ".") {
        
//         }
//     }  
    
//     return counter;
  
// }

// console.log(countPhotos(">.>..<"))


let myString = "1213141516"
for (i = 0; i < myString.length; i++){
    remainderOfString = myString.slice(-(length - i - 1))
    if (myString[i] === "1") {
        console.log(remainderOfString)
    }
}
length = 6
iterator = 0
// console.log(myString.slice(-5))
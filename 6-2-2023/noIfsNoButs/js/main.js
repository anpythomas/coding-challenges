// function noIfsNoButs(a, b) {
//     let finalString
    
//     switch(true) {
//       case (a < b):
//         finalString = `${a} is smaller than ${b}`
//         break;
//       case (a > b):
//         finalString = `${a} is greater than ${b}`
//         break;
//       default:
//         finalString =`${a} is equal to ${b}`
//     }
//     return finalString
//   }

let str = "abc"
let ctr = 0;

for (i = 0;; i++) {
    console.log('hello')
    ctr += 1

    if (ctr === 5) {
        console.log('done')
        break;
    }
}
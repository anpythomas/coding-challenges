// let reverseString = (str) => {
//     let newString = str.split(' ')
//     for (i = 0; i < newString.length; i++) {
//         newString[i] = newString[i].split('').reverse().join('')
//     }
//     return newString
// };

const reverseString = (str) => {
    return  str.split(' ').map(x => x.split('').reverse().join('')).join(' ')
}   

console.log(reverseString("hello bill"))
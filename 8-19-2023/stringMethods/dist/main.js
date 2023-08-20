"use strict";
// charAt - this method takes a number as input and returns the char located at that index. 
Object.defineProperty(exports, "__esModule", { value: true });
exports.charAtFunc2 = exports.charAtFunc = void 0;
// behavior 1) if you don't include a number as argument, then the method will return the first char in the string. 2) If you pass a negative number or a number longer than the string, charAt will return an empty string.
// Time complexity - O(1) contant time
const charAtFunc = (mystring, index) => {
    return mystring.charAt(index);
};
exports.charAtFunc = charAtFunc;
console.log((0, exports.charAtFunc)('sammie', 4));
function charAtFunc2(str, i) {
    let stringReturned = str.charAt(i);
    return stringReturned;
}
exports.charAtFunc2 = charAtFunc2;
console.log(charAtFunc2('Kats are fast!', 6));
console.log("Wombat".charAt(5));

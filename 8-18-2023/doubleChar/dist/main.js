"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doubleChar = void 0;
function doubleChar(str) {
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        newString += str[i] + str[i];
    }
    return newString;
}
exports.doubleChar = doubleChar;
console.log(doubleChar('hello'));

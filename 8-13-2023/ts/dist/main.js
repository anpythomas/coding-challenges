"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLength = void 0;
function addLength(str) {
    let myWordsArray = str.split(" ");
    for (let i = 0; i < myWordsArray.length; i++) {
        console.log(myWordsArray[i] + " " + myWordsArray.length);
        myWordsArray[i] += " " + myWordsArray[i].length;
    }
    return myWordsArray;
}
exports.addLength = addLength;
console.log(addLength('hello world'));

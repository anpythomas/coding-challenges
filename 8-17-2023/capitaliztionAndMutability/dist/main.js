"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalizeWord = void 0;
function capitalizeWord(word) {
    let wordCap = word[0].toUpperCase() + word.slice(1, word.length);
    return wordCap;
}
exports.capitalizeWord = capitalizeWord;
console.log(capitalizeWord('hello'));

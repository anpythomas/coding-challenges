"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceNth = void 0;
function replaceNth(text, n, oldValue, newValue) {
    let result = "";
    let counter = 1;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === oldValue && counter === n) {
            result += newValue;
            counter = 1;
        }
        else if (text[i] === oldValue && counter !== n) {
            result += text[i];
            counter += 1;
        }
        else {
            result += text[i];
        }
    }
    return result;
}
exports.replaceNth = replaceNth;
console.log(replaceNth('Hello, billie', 2, 'l', '*'));

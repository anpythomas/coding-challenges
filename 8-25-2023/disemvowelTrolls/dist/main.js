"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeVowels = void 0;
const removeVowels = (originalComment) => {
    const vowels = 'aeiouAEIOU';
    return [...originalComment].filter(char => !vowels.includes(char)).join(' ');
};
exports.removeVowels = removeVowels;
console.log((0, exports.removeVowels)('Hello, worlD'));

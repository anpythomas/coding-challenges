"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNeedle = void 0;
function findNeedle(haystack) {
    var positionFound = 0;
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] === 'needle') {
            positionFound = i;
        }
    }
    return "found the needle at position ".concat(positionFound);
}
exports.findNeedle = findNeedle;
console.log(findNeedle(['3', '123124234', null, 'needle', 'world', 'hay', 2, '3', true, false]));

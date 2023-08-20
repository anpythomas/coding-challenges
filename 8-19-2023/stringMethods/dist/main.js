"use strict";
// charAt - this method takes a number as input and returns the char located at that index. 
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexOfFunc = exports.indexOfFunction = exports.aIncludesFunction = exports.includesFunc = exports.aConcatFunction = exports.myConcatFunc99 = exports.charCodeAtFunc2 = exports.charCodeAtFunc = exports.charAtFunc2 = exports.charAtFunc = void 0;
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
// charCodeAt - this method takes a number as an agrument and returns the unicode value at that index
// behavior 1) if the index is out of range (negative or greater than the length of the string), this method will return a Nan value.
// time complexity - O(1) constant time since we are searching by index
function charCodeAtFunc(aString, anIndex) {
    return aString.charCodeAt(anIndex);
}
exports.charCodeAtFunc = charCodeAtFunc;
console.log(charCodeAtFunc('Tesla Powered', 4));
const charCodeAtFunc2 = (myStr, myI) => {
    let myAscii = myStr.charCodeAt(myI);
    return myAscii;
};
exports.charCodeAtFunc2 = charCodeAtFunc2;
console.log((0, exports.charCodeAtFunc2)('Hi, Willie it Joe T', 4));
console.log("Run, you beaaaassttt!!!".charCodeAt(10));
// concat - concatenates the string values of two or more string and returns a new string since string in js are immutable
// in modern day js, it's more common to use the + operator or string literals to concatenat strings
// time complexity - worst cast scenario is O(n + m), where n is the length of the first string and m is the length of all other strings being concatenated. okay for shorter strings, but for longer strings or using in a loop, this can become probablamatic becuase each time this method is called it creates a new string. for a loop with many iterations, you should consider pushing to an arry in the loop and using join after the loop is finished to convert to string.
function myConcatFunc99(str1, str2) {
    let fillerString = 'the';
    return str1.concat(' ', fillerString, ' ', str2);
}
exports.myConcatFunc99 = myConcatFunc99;
console.log(myConcatFunc99('jimmie', 'bull'));
const aConcatFunction = (myStr, yourStr, aString) => {
    let theConcatedString = myStr.concat(' ', yourStr, ' ', aString);
    return theConcatedString;
};
exports.aConcatFunction = aConcatFunction;
console.log((0, exports.aConcatFunction)('space', 'flight', 'no.77'));
let string1 = "run";
let string2 = "Forrest";
console.log(string1[0].toUpperCase().concat(string1.slice(1, string1.length), ', ', string2, ', ', string1, '!'));
// includes - this method searches if a string is in another string. returning true if it is and false if not. this search is case sensitive.
// this method takes a second argument which is the postion to start searching at. this defaults to zero if left empty.
// time complexity - the worst case is O(n*m) though this can be faster if the string is matched before the end of the mainstring. This can be faster in most modern JS search engines. For most common apps, this method is sufficient in term for speed.
function includesFunc(str1, str2) {
    return str1.includes(str2);
}
exports.includesFunc = includesFunc;
console.log(includesFunc('Pete is crazy', 'is'));
const aIncludesFunction = (string1, string2) => {
    let hasString = string1.includes(string2, 3);
    return hasString;
};
exports.aIncludesFunction = aIncludesFunction;
console.log((0, exports.aIncludesFunction)('sammie the bull', 'mie'));
console.log("The gas is hott".includes('Gas'));
// indexof - takes a string as a parameter and searches another string showing the first occurance of the substring. it takes an optional parameter of type number and a returns the index of any substring equal to or greater than that position.
// return -1 if substring not found
// time complexity - the worst case is O(n*m) though this can be faster if the string is matched before the end of the mainstring. This can be faster in most modern JS search engines. For most common apps, this method is sufficient in term for speed.
function indexOfFunction(subString, fullString) {
    return fullString.indexOf(subString, 20);
}
exports.indexOfFunction = indexOfFunction;
console.log(indexOfFunction('bat', 'the fastest bat in the world is the equator bat, thought the scorpion bat is a close second.'));
const indexOfFunc = (subStr, mainStr) => {
    let firstOccuarence = mainStr.indexOf(subStr);
    return mainStr.indexOf(subStr, firstOccuarence + 1);
};
exports.indexOfFunc = indexOfFunc;
console.log((0, exports.indexOfFunc)('at', 'it\'s at it\'s worst when at another\'s level'));
console.log("he who speaks is not yet spoken".indexOf("he"));

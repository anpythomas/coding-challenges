"use strict";
function disemvowel(str) {
    // Create string with vowels called allVowels
    let allVowels = "aeiou";
    // Create final string to return called cleanString
    let cleanString = "";
    // Iterate through string
    for (let i = 0; i < str.length; i++) {
        // If char NOT in allVowels string, add element to cleanString
        if (!allVowels.includes(str[i].toLowerCase())) {
            cleanString += str[i];
        }
    }
    // return a string called cleanString
    return cleanString;
}
console.log(disemvowel('How arE you?'));

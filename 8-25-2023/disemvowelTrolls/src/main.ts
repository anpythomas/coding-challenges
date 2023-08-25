function disemvowel(str: string): string {
    // Create string with vowels called allVowels
    let allVowels: string = "aeiou";

    // Create final string to return called cleanString
    let cleanString: string = "";

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


console.log(disemvowel('How arE you?'))
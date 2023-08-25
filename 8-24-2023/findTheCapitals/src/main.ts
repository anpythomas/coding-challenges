export function capitals(word: string): number[] {
    // Create blank array called final array to store indexes
    let finalArray: number[] = [];

    // Iterate through string
    for (let i = 0; i < word.length; i++) {
        // Declare variable tmpChar and set to character ascii code
        const tmpChar: number = word.charCodeAt(i);

        // Check if between codes for A - Z
        if (tmpChar >= 65 && tmpChar <= 90) {
            // If yes, add to finalArray
            finalArray.push(i);
        }
    }

    // Return finalArray
    return finalArray;
}

console.log(capitals('adfEjefe3944EJeijadfiiIFj'))
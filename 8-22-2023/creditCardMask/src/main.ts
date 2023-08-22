// return masked string
export function maskify(cc: string): string {
    // Create empty string variable
    let maskedString: string[] = [];

    // Create counter variable
    let counter: number = 0;

    // Iterate through string backwards
    for (let i = cc.length - 1; i >= 0; i--) {
        // If counter is below 4, add item to string variable, add 1 to counter
        if (counter < 4) {
            maskedString.unshift(cc[i]);
            counter += 1;
        } else if (counter >= 4) {
            // If counter is 4 or above, add # symbol to string variable
            maskedString.unshift("#");
        }
    }

    // Return empty string variable
    return maskedString.join("");
}

console.log(maskify("eiofjiejiejf309j23iorj309jr"));

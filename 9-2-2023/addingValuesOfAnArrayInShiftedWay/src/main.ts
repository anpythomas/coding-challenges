export function addingShifted(
    arrayOfArrays: number[][],
    shift: number
): number[] {
    console.log(arrayOfArrays, shift);

    let answer: number[] = [];

    // Create a loop that loops for the length of the parent (outer array)
    for (let i = 0; i < arrayOfArrays.length; i++) {
        for (let n = 0; n < arrayOfArrays[i].length; n++) {
            console.log(arrayOfArrays[i][n]);
        }
        console.log("");
    }

    return answer;
}

console.log(addingShifted([[], [], []], 2))
export function findCapitalIndices(word: string){

    return word.split("")
        .map((elem, index) => {
        if (elem.charCodeAt(0) >= 65 && elem.charCodeAt(0) <= 90) {
            return index;
        }
        return undefined;
    })
    .filter(item => item !== undefined)
}

console.log(findCapitalIndices("fEjfFj"));

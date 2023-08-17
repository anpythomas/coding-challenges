export function capitalizeWord(word: string): string {
    let wordCap: string = word[0].toUpperCase() + word.slice(1, word.length)
    return wordCap
}

console.log(capitalizeWord('hello'))
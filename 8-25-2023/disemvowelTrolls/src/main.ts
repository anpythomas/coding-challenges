export const removeVowels = (originalComment: string) :string => {
    const vowels = 'aeiouAEIOU'
    
    return [...originalComment].filter(char => !vowels.includes(char)).join(' ')
}

console.log(removeVowels('Hello, worlD'))
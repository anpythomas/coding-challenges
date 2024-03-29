// charAt - this method takes a number as input and returns the char located at that index. 

// behavior 1) if you don't include a number as argument, then the method will return the first char in the string. 2) If you pass a negative number or a number longer than the string, charAt will return an empty string.

// Time complexity - O(1) contant time

export const charAtFunc = (mystring: string, index: number) : string => {
    return mystring.charAt(index)
}

console.log(charAtFunc('sammie', 4))

export function charAtFunc2 (str: string, i: number) : string{
    let stringReturned = str.charAt(i)
    return stringReturned
}

console.log(charAtFunc2('Kats are fast!', 6))

console.log("Wombat".charAt(5))


// charCodeAt - this method takes a number as an agrument and returns the unicode value at that index

// behavior 1) if the index is out of range (negative or greater than the length of the string), this method will return a Nan value.

// time complexity - O(1) constant time since we are searching by index

export function charCodeAtFunc (aString: string, anIndex: number) : number {
    return aString.charCodeAt(anIndex)
}

console.log(charCodeAtFunc('Tesla Powered', 4))

export const charCodeAtFunc2 = (myStr: string, myI: number) => {
    let myAscii: number = myStr.charCodeAt(myI)
    
    return myAscii
}

console.log(charCodeAtFunc2('Hi, Willie it Joe T', 4))

console.log("Run, you beaaaassttt!!!".charCodeAt(10))


// concat - concatenates the string values of two or more string and returns a new string since string in js are immutable

// in modern day js, it's more common to use the + operator or string literals to concatenat strings

// time complexity - worst cast scenario is O(n + m), where n is the length of the first string and m is the length of all other strings being concatenated. okay for shorter strings, but for longer strings or using in a loop, this can become probablamatic becuase each time this method is called it creates a new string. for a loop with many iterations, you should consider pushing to an arry in the loop and using join after the loop is finished to convert to string.


export function myConcatFunc99 (str1: string, str2: string) : string {
    let fillerString: string = 'the'
    return str1.concat(' ', fillerString, ' ', str2)
}

console.log(myConcatFunc99('jimmie', 'bull'))

export const aConcatFunction = (myStr: string, yourStr: string, aString: string) : string => {
    let theConcatedString: string = myStr.concat(' ', yourStr, ' ', aString)
    return theConcatedString
}

console.log(aConcatFunction('space', 'flight', 'no.77'))

let string1: string = "run"
let string2: string = "Forrest"

console.log(string1[0].toUpperCase().concat(string1.slice(1, string1.length), ', ', string2, ', ', string1, '!'))


// includes - this method searches if a string is in another string. returning true if it is and false if not. this search is case sensitive.

// this method takes a second argument which is the postion to start searching at. this defaults to zero if left empty.

// time complexity - the worst case is O(n*m) though this can be faster if the string is matched before the end of the mainstring. This can be faster in most modern JS search engines. For most common apps, this method is sufficient in term for speed.

export function includesFunc (str1: string, str2: string) : boolean {
    return str1.includes(str2)
}

console.log(includesFunc('Pete is crazy', 'is'))

export const aIncludesFunction = (string1: string, string2: string) : boolean => {
    let hasString: boolean = string1.includes(string2, 3)
    return hasString
}

console.log(aIncludesFunction('sammie the bull', 'mie'))

console.log("The gas is hott".includes('Gas'))


// indexof - takes a string as a parameter and searches another string showing the first occurance of the substring. it takes an optional parameter of type number and a returns the index of any substring equal to or greater than that position.

// return -1 if substring not found

// time complexity - the worst case is O(n*m) though this can be faster if the string is matched before the end of the mainstring. This can be faster in most modern JS search engines. For most common apps, this method is sufficient in term for speed.

export function indexOfFunction (subString: string, fullString: string) :number {
    return fullString.indexOf(subString, 20)
}

console.log(indexOfFunction('bat', 'the fastest bat in the world is the equator bat, thought the scorpion bat is a close second.'))

export const indexOfFunc = (subStr: string, mainStr: string) :number => {
    let firstOccuarence: number = mainStr.indexOf(subStr)
    return mainStr.indexOf(subStr, firstOccuarence+1)
}

console.log(indexOfFunc('at', 'it\'s at it\'s worst when at another\'s level'))

console.log("he who speaks is not yet spoken".indexOf("he"))


// match - tries to match a string against a regular expression. returns an array with all matches or null if none match. If the g flag is used, all occurences returned. If g flag not used, only first occurance returned.

// time complexity - worst case: 1) for complex regex, exponential time. 2) simple regex, O(n)

export function aMatchFunction (str1: string) {
    return str1.match(/[A-Z]/g)
}

console.log(aMatchFunction('Hello, World'))

export let theMatchFunc = (myString: string) => {
    let myMatches: any = myString.match(/[A-Z]/g)
    return myMatches
}

console.log(theMatchFunc('It\'s sammie the bull, run!'))

console.log('Pimp the seahorse. Pimp a seahorse.'.match(/mp/g))


// repeat - accept a string and returns a new string with the requested number of the original string that was requested

// will throw 'RangeError' if count is negative or if count overflows maximum string length

// time complexity - big O(n)

export function repeatFunc (myStr: string) :string {
    return myStr.repeat(3)
}

console.log(repeatFunc('hello, world'))

export const thisIsMyRepeatFunction = (str1: string) :string => {
    const finalString: string = str1.repeat(10)
    return finalString
}

console.log(thisIsMyRepeatFunction('run'))

console.log('football '.repeat(4))


// replace - take a string and searches another string for the original string, replacing the initial string in the larger string. this only replaces the first occurence

// add'l info - this works with both strings and regular expressions

// time complexity - big O(n) for string replace, with regex it can be worse due to the back tracking that might be needed by the regex engine

export const thisWillReplace = (subStr: string, mainStr: string) :string => {
    return mainStr.replace('mercedes', subStr)
}

console.log(thisWillReplace('bentley', "bill the bull borrowed his mercedes!"))

export function replaceFunc ( str2: string) :string {
    const myRegexVar: RegExp = /watch/g
    const newString: string = str2.replace(myRegexVar, 'build')
    return newString
}

console.log(replaceFunc('Don\'t watch the throne, watch the throne..'))

console.log('flying into space'.replace('space', 'place'))


// search - searches for a mathch between a regular expression and a string, returning the index of the first match. also works with searching for substrings and not only regex

// time complexity - O(n) for string. Usually higher for regex

console.log('sammie the bull moves quick'.search(/sam/))

export const searchFunction = (str1: string, subString: string) : number => {
    const myIndex: number = str1.search(subString)
    return myIndex
}

console.log(searchFunction('Hello, world!', 'orl'))

export function mySerachFunc (string1: string, regExVal: RegExp) :number {
    return string1.search(regExVal)
}

console.log(mySerachFunc('We don\'t walk, we balk!', /walk/))


// slice - the slice method removes a section from a string and creates a new string, without changing the original string

// if index start or end is not valid, an empty string is returned

// time complexity - O(k) where k is the length of the slice

console.log('I love house music.'.slice(7, 12))

export function iSlice (iString: string, begIndex: number, endIndex: number) :string {
    return iString.slice(begIndex, endIndex)
}

console.log(iSlice('hello', 2, 4))

export const uSlice = (str: string, intA: number, intB: number) :string => {
    const newStr: string = str.slice(intA, intB)
    return newStr
}

console.log(uSlice('Outerspace', 3, 9))


// split - this method takes a pattern, and divides this string into an ordered list based on the pattern, puts these substrings into an array, and returns the array

// time complexity - O(n)

console.log('1.2.3.4.5'.split('.'))

export const theSplit = (str1:string) => {
    return str1.split(' ')
}

console.log(theSplit('It\s the last of the month, the month, the month'))

export function aFunc (string1: string) {
    return string1.split(/[\s,;]+/)
}

console.log(aFunc('It\s the last of the month, the month, the month'))


// substr - returns a portion of a string starting a spcified postion and extending for a given number or characters afterwards

// has been depracted and replaced with slice

// time complexity - O(k) where k is the the length of the substr

console.log('abcdefghijk'.substr(3, 4))

export function depSubstringFunc (fullStr: string) :string{
    return fullStr.substr(3, 10)
}

console.log(depSubstringFunc('twitter has been replaced with x :/'))

export const substrDepcreated = (mainStr: string) :string => {
    const myString: string = mainStr.substr(2, 4)
    return myString
}

console.log(substrDepcreated('1234567891011121314'))


// toLowerCase() - takes in a string and returns the string all all lowercased

// the original string is not changed

// time complexity - O(n)

console.log('ASJdkeEifej'.toLowerCase())

export function lowerCaseFunc(thisString: string) :string {
    return thisString.toLowerCase()
}

console.log(lowerCaseFunc('HELLO'))

export const myLowerCaseFunction = (string1: string) :string => {
    return string1.toLowerCase()
}

console.log(myLowerCaseFunction('WorlD'))


// toUpperCase() - takes in a string and returns the string in all upper case

// the orinal string is not changed

// time complexity - O(n)

export const upperFunc = (str1: string) :string => {
    return str1.toUpperCase()
}

console.log(upperFunc('acbdefgh'))

export function toUppFunction (myString: string) :string {
    const finalString: string = myString.toUpperCase()
    return finalString
}

console.log(toUppFunction('hello, world'))

console.log('See spike jump!'.toUpperCase())


// trim - removes white space from begining and ending of string

// does not change original string

// time complexity - O(n)

export function toTrim (theString: string) :string {
    return theString.trim()
}

console.log(toTrim('    trim mee......    '))

export const trimThis = (str1: string) :string => {
    const trimmedString: string = str1.trim()
    return trimmedString
}

console.log(trimThis('     i need trimming!!!           '))

console.log('     i\'ve been trimmed     '.trim())
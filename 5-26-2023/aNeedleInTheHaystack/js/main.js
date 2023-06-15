function findNeedle(haystack) {
    console.log(haystack.findIndex((element) => element === "needle")
    // return "Found the needle at position ${haystack}"
}

console.log(findNeedle([1, 2, "needle", "hello"]))
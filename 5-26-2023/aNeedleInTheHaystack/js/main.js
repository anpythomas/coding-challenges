function findNeedle(haystack) {
    for (i = 0; i < haystack.length; i++) {
      if (haystack[i] === "needle") {
        return `found the needle at position ${i}`
      }
    }
     return "Your function didn't return anything"
   }
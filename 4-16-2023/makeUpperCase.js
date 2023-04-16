function makeUpperCase(str) {
    let strUpper = ""
    for (i = 0; i < str.length; i++) {
      strUpper += str[i].toUpperCase()
    }
    return strUpper
  }
function likes(names) {
    // TODO
    let numOfNames = names.length
    
    if (numOfNames === 0) {
      return "no one likes this"
    } else if (numOfNames === 1) {
      return `${names[0]} likes this`
    } else if (numOfNames === 2) {
      return `${names[0]} and ${names[1]} like this`
    } else if (numOfNames === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
      return `${names[0]}, ${names[1]} and ${numOfNames - 2} others like this`
    }
  
  }
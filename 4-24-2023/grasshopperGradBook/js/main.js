function getGrade (s1, s2, s3) {
    let avg = (s1 + s2 + s3) / 3
    
    if (avg >= 90 && avg <=100) {
      return "A"
    } else if (avg >= 80 && avg < 90) {
      return "B"
    } else if (avg >= 70 && avg < 80) {
      return "C"
    } else if (avg >= 60 && avg < 70) {
      return "D"
    } else {
      return "F"
    }
  }

console.log(getGrade(90, 83, 93))
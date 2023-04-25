// function getGrade (s1, s2, s3) {
//     let avg = (s1 + s2 + s3) / 3
    
//     if (avg >= 90 && avg <=100) {
//       return "A"
//     } else if (avg >= 80 && avg < 90) {
//       return "B"
//     } else if (avg >= 70 && avg < 80) {
//       return "C"
//     } else if (avg >= 60 && avg < 70) {
//       return "D"
//     } else {
//       return "F"
//     }
//   }

function getGrade(g1, g2, g3) {
    let avg = (g1 + g2 + g3) / 3
    console.log(avg)
    if (avg >= 90) return "A";
        else if (avg >= 80) return "B";
        else if (avg >= 70) return "C";
        else if (avg >=60) return "D";
        else return "F";

}

console.log(getGrade(59, 60, 60))
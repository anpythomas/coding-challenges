function countSheeps(arrayOfSheep) {
    let count = 0
    for (i = 0; i < arrayOfSheep.length; i++) {
      arrayOfSheep[i] === true ? count+=1 : 'pass'
    }
    return count
  }
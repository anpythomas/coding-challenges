function nameShuffler(str){
    let nameList = str.split(' ')
    let nameReversed = `${nameList[1]} ${nameList[0]}`
    return nameReversed
  }
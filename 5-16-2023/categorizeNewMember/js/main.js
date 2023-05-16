function openOrSenior(data){
    let category = []
    for (i = 0; i < data.length; i++) {
      if (data[i][0] >= 55 && data[i][1] > 7) {
        category.push('Senior')
      } else {
        category.push('Open')
      }
    }
    return category
  }
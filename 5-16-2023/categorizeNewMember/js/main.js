function openOrSenior(data){
    let category = []
    for (i = 0; i < data.length; i++) {
      (data[i][0] >= 55 && data[i][1] > 7) ? category.push('Senior') : category.push('Open')
    }
    return category
  }

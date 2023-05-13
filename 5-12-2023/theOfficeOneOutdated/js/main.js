function outed(meet, boss){
    let sum = 0
    let totalPeople = 0
    
    for (const property in meet) {
      totalPeople += 1
      if (property === boss) {
        sum += (meet[property] * 2)
      } else {
        sum += meet[property]
      }
    }
    
    let avg = sum / totalPeople
    
    if (avg <= 5) {
      return "Get Out Now!"
    } else {
      return "Nice Work Champ!"
    }
  
  }
function outed(meet, boss){
    let sum = 0
    let totalPeople = 0
    let avg = 0

    
    for (const property in meet) {
      totalPeople += 1
      if (property === boss) {
        sum += (meet[property] * 2)
      } else {
        sum += meet[property]
      }
    }
    
    avg = sum / totalPeople
    
    return avg <= 5 ? "Get Out Now!" : "Nice Work Champ!"

  
  }
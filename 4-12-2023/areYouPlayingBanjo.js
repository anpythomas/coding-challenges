function areYouPlayingBanjo(name) {
  let firstLetter = name[0].toLowerCase()
  let sentence
  
  if (firstLetter === 'r') {
    sentence = `${name} plays banjo`
  } else {
    sentence = `${name} does not play banjo`
  }
  
  return sentence
}
const teamsWonTossAndMatch = function (matchesData) {
  const mp = new Map()
  for (const match of matchesData) {
    const { winner, toss_winner } = match
    if (winner === toss_winner) {
      if (!mp.has(winner)) {
        mp.set(winner, 1)
      } else {
        mp.set(winner, mp.get(winner) + 1)
      }
    }
  }

  const result = {}

  for(const [winner, count] of mp){
    result[winner] = count
  }
  return result
}

export default teamsWonTossAndMatch
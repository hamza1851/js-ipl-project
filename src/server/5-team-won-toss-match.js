const teamsWonTossAndMatch = function (matchesData) {
  return matchesData.reduce((result, { winner, toss_winner }) => {
    if (winner === toss_winner) {
      result[winner] = (result[winner] || 0) + 1
    }
    return result
  }, {})
  // const mp = new Map()
  // for (const match of matchesData) {
  //   const { winner, toss_winner } = match
  //   if (winner === toss_winner) {
  //     if (!mp.has(winner)) {
  //       mp.set(winner, 1)
  //     } else {
  //       mp.set(winner, mp.get(winner) + 1)
  //     }
  //   }
  // }

  // const result = {}

  // for(const [winner, count] of mp){
  //   result[winner] = count
  // }
  // return result
}

export default teamsWonTossAndMatch

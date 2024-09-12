const matchWonPerTeamPerYear = function (data) {
  const mp = new Map()

  for (const match of data) {
    const { winner, season } = match
    if (!mp.has(winner)) {
      mp.set(winner, new Map([[season, 1]]))
    } else {
      const teamMap = mp.get(winner)

      if (teamMap.has(season)) {
        teamMap.set(season, teamMap.get(season) + 1)
      } else {
        teamMap.set(season, 1)
      }
    }
  }

  const result = {}
  for (const [team, seasons] of mp) {
    if (team !== null) result[team] = Object.fromEntries(seasons) // Convert each season map into a plain object
  }

  return result
}

export default matchWonPerTeamPerYear

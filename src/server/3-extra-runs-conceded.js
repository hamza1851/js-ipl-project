const extraRunsConcededInYear = function (matchData, deliveriesData, year) {
  const mp = new Map()
  for (const match of matchData) {
    const { season, id, team1, team2 } = match

    if (season === year) {
      let extra_runs_team_1 = 0
      let extra_runs_team_2 = 0
      for (const delivery of deliveriesData) {
        if (delivery.match_id === id && delivery.bowling_team === team1) {
          extra_runs_team_1 += Number(delivery.extra_runs)
        }
        if (delivery.match_id === id && delivery.bowling_team === team2) {
          extra_runs_team_2 += Number(delivery.extra_runs)
        }
      }
      mp.set(team1, (mp.get(team1) || 0) + extra_runs_team_1)
      mp.set(team2, (mp.get(team2) || 0) + extra_runs_team_2)
    }
  }
  const result = {}
  for (const [team, extras] of mp) {
    result[team] = extras
  }

  return result
}

export default extraRunsConcededInYear
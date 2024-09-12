const teamsGetExtraRuns = function (data) {
  const mp = new Map()
  for (const match of data) {
    const { season, winner, win_by_runs } = match

    if (season === "2016") {
      if (!mp.has(winner)) {
        const runs = parseInt(win_by_runs, 10)
        mp.set(winner, runs)
      } else {
        const runs = parseInt(win_by_runs, 10)
        mp.set(winner, mp.get(winner) + runs)
      }
    }
  }

  const result = {}
  for (const [team, win_by_runs] of mp) {
    if (team !== null) result[team] = win_by_runs
  }
  return result
}

export default teamsGetExtraRuns

const batsmanStrikeRate = function (matchesData, deliveriesData) {
  const mp = new Map()

  for (const match of matchesData) {
    const { id, season } = match

    for (const delivery of deliveriesData) {
      const { match_id, batsman, batsman_runs, extra_runs } = delivery
      if (id === match_id) {
        if (!mp.has(season)) {
          mp.set(season, new Map())
        }
        const batsman_map = mp.get(season)

        if (!batsman_map.has(batsman)) {
          batsman_map.set(batsman, { balls: 0, runs: 0 })
        }
        const prev = batsman_map.get(batsman)

        if (extra_runs !== "0") {
          prev.runs += Number(batsman_runs)
        } else {
          prev.balls += 1
          prev.runs += Number(batsman_runs)
        }
        batsman_map.set(batsman, prev)
      }
    }
  }

  const result = {} // Initialize result as an object
  for (const [season, batsman_map] of mp) {
    for (const [batsman_name, runs_and_balls] of batsman_map) {
      const strikeRate = Math.floor(
        runs_and_balls.balls > 0
          ? (runs_and_balls.runs / runs_and_balls.balls) * 100
          : 0
      )

      // Check if the season already exists in the result object
      if (!result[season]) {
        result[season] = [] // Initialize an empty array for the season
      }

      // Push the batsman data into the season array
      result[season].push({ batsman_name, strikeRate })
    }
  }

  // console.log(result)

  // console.log(result)

  // const top_ten_economic = result.slice(0, 10)

  // return top_ten_economic
  return result
}

export default batsmanStrikeRate

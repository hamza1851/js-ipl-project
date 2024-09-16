const topEconomicalBowler = function (matchesData, deliveriesData, year) {
  // 
  const matchesInYear = matchesData.filter(({ season }) => season === year)

  const bowler_stats = matchesInYear.reduce((result, { id }) => {
    deliveriesData
      .filter(({ match_id }) => match_id === id)
      .forEach(({ bowler, wide_runs, noball_runs, total_runs }) => {
        if (!result[bowler]) {
          result[bowler] = { balls: 0, runs: 0 }
        }

        if (wide_runs === "0" && noball_runs === "0") {
          result[bowler].balls++
        }
        result[bowler].runs += Number(total_runs)
      })
    return result
  }, {})

  const bowler_economy = Object.entries(bowler_stats)
    .map(([bowler, { balls, runs }]) => {
      const overs = balls / 6
      const economy_rate = balls > 0 ? (runs / overs).toFixed(2) : Infinity
      return { bowler, economy_rate }
    })
    .sort(
      (first_bowler, second_bowler) =>
        first_bowler.economy_rate - second_bowler.economy_rate
    )
  // console.log(bowler_economy)

  return bowler_economy.slice(0, 10)

  // const mp = new Map()

  // for (const match of matchesData) {
  //   const { season } = match

  //   if (season === year) {
  //     const { id } = match
  //     for (const delivery of deliveriesData) {
  //       const { match_id } = delivery
  //       if (id === match_id) {
  //         const { bowler, extra_runs, total_runs } = delivery
  //         if (extra_runs !== "0") {
  //           if (!mp.has(bowler)) {
  //             mp.set(bowler, { balls: 0, runs: 0 })
  //           }
  //           const prev = mp.get(bowler)
  //           // prev.balls += 1
  //           prev.runs += Number(total_runs)
  //           mp.set(bowler, prev)
  //         } else {
  //           if (!mp.has(bowler)) {
  //             mp.set(bowler, { balls: 0, runs: 0 })
  //           }
  //           const prev = mp.get(bowler)
  //           prev.balls += 1
  //           prev.runs += Number(total_runs)
  //           mp.set(bowler, prev)
  //         }
  //       }
  //     }
  //   }
  // }
  // const result = []
  // for (const [bowler, ballsAndRuns] of mp) {
  //   result.push({ bowler, ballsAndRuns })
  // }
  // result.sort((a, b) => {
  //   let first = a.ballsAndRuns.runs / (a.ballsAndRuns.balls / 6)
  //   let second = b.ballsAndRuns.runs / (b.ballsAndRuns.balls / 6)

  //   return first - second
  // })

  // const top_ten_economic = result.slice(0, 10)

  // return top_ten_economic
}

export default topEconomicalBowler

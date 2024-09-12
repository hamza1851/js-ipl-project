const topEconomicalBowler = function (matchesData, deliveriesData, year) {
  const mp = new Map()

  for (const match of matchesData) {
    const { season } = match

    if (season === year) {
      const { id } = match
      for (const delivery of deliveriesData) {
        const { match_id } = delivery
        if (id === match_id) {
          console.log(
            `This is id ${id}, this is ${match_id}, this is year ${season}`
          )
          const { bowler, extra_runs, total_runs } = delivery
          if (extra_runs !== "0") {
            if (!mp.has(bowler)) {
              mp.set(bowler, { balls: 0, runs: 0 })
            }
            const prev = mp.get(bowler)
            // prev.balls += 1
            prev.runs += Number(total_runs)
            mp.set(bowler, prev)
          } else {
            if (!mp.has(bowler)) {
              mp.set(bowler, { balls: 0, runs: 0 })
            }
            const prev = mp.get(bowler)
            prev.balls += 1
            prev.runs += Number(total_runs)
            mp.set(bowler, prev)
          }
        }
      }
    }
  }
  const result = []
  for (const [bowler, ballsAndRuns] of mp) {
    result.push({ bowler, ballsAndRuns })
  }
  result.sort((a, b) => {
    let first = a.ballsAndRuns.runs / (a.ballsAndRuns.balls / 6)
    let second = b.ballsAndRuns.runs / (b.ballsAndRuns.balls / 6)

    return first - second
  })

  const top_ten_economic = result.slice(0, 10)

  return top_ten_economic
}

export default topEconomicalBowler

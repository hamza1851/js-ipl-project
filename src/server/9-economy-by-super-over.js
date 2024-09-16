import deliveriesData from "../public/output/parsedDeliveriesData.json" assert { type: "json" }

const bestBowlerBySuperOver = function (deliveriesData) {
  const bowlerStats = deliveriesData
    .filter(({ is_super_over }) => is_super_over === "1")
    .reduce((result, { bowler, noball_runs, wide_runs, total_runs }) => {
      if (!result[bowler]) {
        result[bowler] = { balls: 0, runs: 0 }
      }

      if (noball_runs === "0" && wide_runs === "0") {
        result[bowler].balls += 1
      }

      result[bowler].runs += Number(total_runs)

      return result
    }, {})

  const bestBowlerStats = Object.entries(bowlerStats)
    .map(([bowler, { balls, runs }]) => ({
      bowler,
      economyRate: runs / (balls / 6),
    }))
    .sort((a, b) => a.economyRate - b.economyRate)

  return bestBowlerStats[0]

  // console.log(best_bowler_stats)

  // const superOverDelivery = []

  // for (const delivery of deliveriesData) {
  //   const { is_super_over } = delivery

  //   if (is_super_over === "1") {
  //     superOverDelivery.push(delivery)
  //   }
  // }

  // const mp = new Map()
  // for (const delivery of superOverDelivery) {
  //   const { bowler, extra_runs, total_runs } = delivery
  //   if (extra_runs !== "0") {
  //     if (!mp.has(bowler)) {
  //       mp.set(bowler, { balls: 0, runs: 0 })
  //     }
  //     const prev = mp.get(bowler)
  //     prev.runs += Number(total_runs)
  //     mp.set(bowler, prev)
  //   } else {
  //     if (!mp.has(bowler)) {
  //       mp.set(bowler, { balls: 0, runs: 0 })
  //     }
  //     const prev = mp.get(bowler)
  //     prev.balls += 1
  //     prev.runs += Number(total_runs)
  //     mp.set(bowler, prev)
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

  // return result[0]
}
export default bestBowlerBySuperOver

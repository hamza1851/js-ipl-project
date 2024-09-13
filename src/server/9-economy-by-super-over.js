import deliveriesData from "../public/output/parsedDeliveriesData.json" assert { type: "json" }

const bestBowlerBySuperOver = function (deliveriesData) {
  const superOverDelivery = []

  for (const delivery of deliveriesData) {
    const { is_super_over } = delivery

    if (is_super_over === "1") {
      superOverDelivery.push(delivery)
    }
  }

  const mp = new Map()
  for (const delivery of superOverDelivery) {
    const { bowler, extra_runs, total_runs } = delivery
    if (extra_runs !== "0") {
      if (!mp.has(bowler)) {
        mp.set(bowler, { balls: 0, runs: 0 })
      }
      const prev = mp.get(bowler)
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

  const result = []
  for (const [bowler, ballsAndRuns] of mp) {
    result.push({ bowler, ballsAndRuns })
  }

  result.sort((a, b) => {
    let first = a.ballsAndRuns.runs / (a.ballsAndRuns.balls / 6)
    let second = b.ballsAndRuns.runs / (b.ballsAndRuns.balls / 6)

    return first - second
  })

  return result[0]
}
export default bestBowlerBySuperOver

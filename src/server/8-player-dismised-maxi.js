const findMostDismissals = (deliveriesData) => {
  const dismissalCount = {}

  for (const delivery of deliveriesData) {
    const { bowler, batsman, player_dismissed } = delivery

    if (player_dismissed !== "") {
      const key = `${bowler}-${batsman}`

      if (!dismissalCount[key]) {
        dismissalCount[key] = 0
      }
      dismissalCount[key]++
    }
  }

  let maxDismissals = 0
  let mostDismissedPair = ""

  for (const [key, count] of Object.entries(dismissalCount)) {
    if (count > maxDismissals) {
      maxDismissals = count
      mostDismissedPair = key
    }
  }

  const [bowler, batsman] = mostDismissedPair.split("-")
  return { bowler, batsman, maxDismissals }
}

export default findMostDismissals

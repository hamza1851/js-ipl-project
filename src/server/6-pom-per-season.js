const playerOfMatchPerSeason = function (matchesData) {
  const mp = new Map()

  for (const match of matchesData) {
    const { season, player_of_match } = match

    if (!mp.has(season)) {
      mp.set(season, new Map([[player_of_match, 1]]))
    } else {
      const playerMap = mp.get(season)

      if (!playerMap.has(player_of_match)) {
        playerMap.set(player_of_match, 1)
      } else {
        playerMap.set(player_of_match, playerMap.get(player_of_match) + 1)
      }
    }
  }

  const result = []
  for (const [year, playerWonAward] of mp) {
    let playerName
    let maxAwardWon = -1e7

    for (const [player, awardWon] of playerWonAward) {
      if (maxAwardWon < awardWon) {
        maxAwardWon = awardWon
        playerName = player
      }
    }

    result.push({
      season: year,
      player_of_match: playerName,
      award_won: maxAwardWon,
    })
  }

  return result
}

export default playerOfMatchPerSeason

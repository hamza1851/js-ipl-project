const playerOfMatchPerSeason = function (matchesData) {
  const player_of_match_per_season = matchesData.reduce(
    (result, { season, player_of_match }) => {
      if (!result[season]) {
        result[season] = {}
      }
      result[season][player_of_match] =
        (result[season][player_of_match] || 0) + 1

      return result
    },
    {}
  )

  const player_of_match = Object.entries(player_of_match_per_season).map(
    ([season, player_stats]) => {
      let top_player = null
      let max_awards_won = -1e7

      for (const [player_name, awards_won] of Object.entries(player_stats)) {
        if (max_awards_won < awards_won) {
          max_awards_won = awards_won
          top_player = player_name
        }
      }
      return { season, player_name: top_player, awards_won: max_awards_won }
    }
  )

  return player_of_match

  // const mp = new Map()

  // for (const match of matchesData) {
  //   const { season, player_of_match } = match

  //   if (!mp.has(season)) {
  //     mp.set(season, new Map([[player_of_match, 1]]))
  //   } else {
  //     const playerMap = mp.get(season)

  //     if (!playerMap.has(player_of_match)) {
  //       playerMap.set(player_of_match, 1)
  //     } else {
  //       playerMap.set(player_of_match, playerMap.get(player_of_match) + 1)
  //     }
  //   }
  // }

  // const result = []
  // for (const [year, playerWonAward] of mp) {
  //   let playerName
  //   let maxAwardWon = -1e7

  //   for (const [player, awardWon] of playerWonAward) {
  //     if (maxAwardWon < awardWon) {
  //       maxAwardWon = awardWon
  //       playerName = player
  //     }
  //   }

  //   result.push({
  //     season: year,
  //     player_of_match: playerName,
  //     award_won: maxAwardWon,
  //   })
  // }

  // return result
}

export default playerOfMatchPerSeason

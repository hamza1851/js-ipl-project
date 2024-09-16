function getMatches(matchesData) {
  return matchesData.reduce((result, { season }) => {
    result[season] = (result[season] || 0) + 1
    return result
  }, {})

  // const mp = new Map()

  // for (const match of data) {
  //   const { season } = match

  //   if (!mp.has(season)) {
  //     mp.set(season, 1)
  //   } else {
  //     mp.set(season, mp.get(season) + 1)
  //   }
  // }

  // const result = {}

  // for (const [season, count] of mp) {
  //   if (season !== null) result[season] = count
  // }
  // return result
}

export default getMatches

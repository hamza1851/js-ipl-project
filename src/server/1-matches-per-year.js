function getMatches(data) {
  const mp = new Map()

  for (const match of data) {
    const { season } = match

    if (!mp.has(season)) {
      mp.set(season, 1)
    } else {
      mp.set(season, mp.get(season) + 1)
    }
  }

  const result = {}

  for (const [season, count] of mp) {
    if (season !== null) result[season] = count
  }
  return result
}

export default getMatches

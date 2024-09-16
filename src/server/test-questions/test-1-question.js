import data from "../../public/output/parsedMatchesData.json" assert { type: "json" }
import getMatches from "../1-matches-per-year.js"
import * as fs from "fs"

const matches_played_per_year = getMatches(data)
const matches_data_to_string = JSON.stringify(matches_played_per_year)
fs.writeFileSync(
  "../../public/output/1-matches-per-year.json",
  matches_data_to_string
)

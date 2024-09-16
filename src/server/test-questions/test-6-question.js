import matchesData from "../../public/output/parsedMatchesData.json" assert { type: "json" }
import playerOfMatchPerSeason from "../6-pom-per-season.js"
import * as fs from "fs"

const player_of_match_per_season = playerOfMatchPerSeason(matchesData)
const string_converted_data = JSON.stringify(player_of_match_per_season)
fs.writeFileSync(
  "../../public/output/6-pom-per-season.json",
  string_converted_data
)

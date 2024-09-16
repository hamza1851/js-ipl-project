import matchWonPerTeamPerYear from "../2-matches-won-per-team-per-year.js"
import matchesData from "../../public/output/parsedMatchesData.json" assert { type: "json" }
import * as fs from "fs"

const team_won_per_year = matchWonPerTeamPerYear(matchesData)
const string_converted_data = JSON.stringify(team_won_per_year)
fs.writeFileSync(
  "../../public/output/2-team-winning-stats.json",
  string_converted_data
)

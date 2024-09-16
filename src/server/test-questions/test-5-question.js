import matchesData from "../../public/output/parsedMatchesData.json" assert { type: "json" }
import teamsWonTossAndMatch from "../5-team-won-toss-match.js"
import * as fs from "fs"

const team_won_both_match_and_toss = teamsWonTossAndMatch(matchesData)
const string_converted_data = JSON.stringify(team_won_both_match_and_toss)
fs.writeFileSync(
  "../../public/output/5-team-won-match-toss.json",
  string_converted_data
)

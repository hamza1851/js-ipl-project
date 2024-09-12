import matchesData from "../../public/output/parsedMatchesData.json" assert { type: "json" }
import teamsWonTossAndMatch from "../5-team-won-toss-match.js"
import * as fs from "fs"

const teamWonBothMatchAndToss = teamsWonTossAndMatch(matchesData)
const json = JSON.stringify(teamWonBothMatchAndToss)
fs.writeFileSync("../../public/output/5-team-won-match-toss.json", json)

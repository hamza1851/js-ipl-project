import matchWonPerTeamPerYear from "../2-matches-won-per-team-per-year.js"
import data from "../../public/output/parsedMatchesData.json" assert { type: "json" }
import * as fs from "fs"

console.log("---------------Questions-2---------------")

const result = matchWonPerTeamPerYear(data)
const json = JSON.stringify(result)
console.log(json)
fs.writeFileSync("../public/output/2-team-winning-stats.json", json)
console.log(result)

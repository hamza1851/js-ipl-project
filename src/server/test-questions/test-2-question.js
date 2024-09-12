import matchWonPerTeamPerYear from "../2-matches-won-per-team-per-year.js"
import data from "../../public/output/matches.json" assert { type: "json" }

console.log("---------------Questions-2---------------")

const result = matchWonPerTeamPerYear(data)
console.log(result)

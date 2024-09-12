import matchesData from "../../public/output/parsedMatchesData.json" assert { type: "json" }
import deliveriesData from "../../public/output/parsedDeliveriesData.json" assert { type: "json" }
import teamsGetExtraRuns from "../3-extra-runs-conceded.js"
import * as fs from "fs"

const winnerByRuns = teamsGetExtraRuns(matchesData, deliveriesData, "2016")
const json = JSON.stringify(winnerByRuns)
fs.writeFileSync("../../public/output/3-teams-get-extra-runs.json", json)
console.log(winnerByRuns)

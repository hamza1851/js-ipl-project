import data from "../../public/output/matches.json" assert { type: "json" }
import teamsGetExtraRuns from "../3-extra-runs-per-team-2016.js"

const winnerByRuns = teamsGetExtraRuns(data)
console.log(winnerByRuns)

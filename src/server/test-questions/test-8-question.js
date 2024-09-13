import deliveriesData from "../../public/output/parsedDeliveriesData.json" assert { type: "json" }
import findMostDismissals from "../8-player-dismised-maxi.js"
import * as fs from "fs"

const mostDismissedPlayer = findMostDismissals(deliveriesData)
const json = JSON.stringify(mostDismissedPlayer)
fs.writeFileSync("../../public/output/8-mostDismissedPlayer.json", json)

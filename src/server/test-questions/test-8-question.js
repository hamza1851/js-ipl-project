import deliveriesData from "../../public/output/parsedDeliveriesData.json" assert { type: "json" }
import findMostDismissals from "../8-player-dismised-maxi.js"
import * as fs from "fs"

const most_dismissed_player = findMostDismissals(deliveriesData)
const string_converted_data = JSON.stringify(most_dismissed_player)
fs.writeFileSync(
  "../../public/output/8-mostDismissedPlayer.json",
  string_converted_data
)

import deliveriesData from "../../public/output/parsedDeliveriesData.json" assert { type: "json" }
import matchesData from "../../public/output/parsedMatchesData.json" assert { type: "json" }
import topEconomicalBowler from "../4-top-ten-economical-bollers.js"
import * as fs from "fs"

const top_ten_economic = topEconomicalBowler(
  matchesData,
  deliveriesData,
  "2015"
)
const json = JSON.stringify(top_ten_economic)
fs.writeFileSync("../../public/output/4-top_ten_economical.json", json)
// console.log(json)

import deliveriesData from "../../public/output/parsedDeliveriesData.json" assert { type: "json" }
import matchesData from "../../public/output/parsedMatchesData.json" assert { type: "json" }
import topEconomicalBowler from "../4-top-ten-economical-bollers.js"
import * as fs from "fs"

const top_ten_economical_bowler = topEconomicalBowler(
  matchesData,
  deliveriesData,
  "2015"
)
const string_converted_data = JSON.stringify(top_ten_economical_bowler)
fs.writeFileSync(
  "../../public/output/4-top_ten_economical.json",
  string_converted_data
)

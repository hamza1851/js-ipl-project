import deliveriesData from "../../public/output/parsedDeliveriesData.json" assert { type: "json" }
import matchesData from "../../public/output/parsedMatchesData.json" assert { type: "json" }
import batsmanStrikeRate from "../7-batsman-strike-rate.js"
import * as fs from "fs"

const bats_man_strike_rate_data = batsmanStrikeRate(matchesData, deliveriesData)

const string_converted_data = JSON.stringify(bats_man_strike_rate_data)
fs.writeFileSync(
  "../../public/output/7-batsmanStrikeRate.json",
  string_converted_data
)

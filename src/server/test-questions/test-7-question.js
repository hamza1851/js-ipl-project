import deliveriesData from "../../public/output/parsedDeliveriesData.json" assert { type: "json" }
import matchesData from "../../public/output/parsedMatchesData.json" assert { type: "json" }
import batsmanStrikeRate from "../7-batsman-strike-rate.js"
import * as fs from "fs"

const batsManStrikeRateData = batsmanStrikeRate(matchesData, deliveriesData)

const json = JSON.stringify(batsManStrikeRateData)
fs.writeFileSync("../../public/output/7-batsmanStrikeRate.json", json)
console.log(batsManStrikeRateData)

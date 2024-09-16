import deliveriesData from "../../public/output/parsedDeliveriesData.json" assert { type: "json" }
import bestBowlerBySuperOver from "../9-economy-by-super-over.js"
import * as fs from "fs"

const super_economy_bowler = bestBowlerBySuperOver(deliveriesData)
const string_converted_data = JSON.stringify(super_economy_bowler)
fs.writeFileSync(
  "../../public/output/9-economyBySuperOver.json",
  string_converted_data
)

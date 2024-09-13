import deliveriesData from "../../public/output/parsedDeliveriesData.json" assert { type: "json" }
import bestBowlerBySuperOver from "../9-economy-by-super-over.js"
import * as fs from "fs"

const superEconomyBowler = bestBowlerBySuperOver(deliveriesData)
const json = JSON.stringify(superEconomyBowler)
fs.writeFileSync("../../public/output/9-economyBySuperOver.json", json)

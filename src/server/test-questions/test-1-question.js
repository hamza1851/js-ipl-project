import data from "../../public/output/parsedMatchesData.json" assert { type: "json" }
import getMatches from "../1-matches-per-year.js"
import * as fs from "fs"

console.log("---------------Questions-1---------------")
const arrOfObj = getMatches(data)
const json = JSON.stringify(arrOfObj)
fs.writeFileSync("../../public/output/1-matches-per-year.json", json)
console.log(arrOfObj)

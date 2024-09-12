import data from "../../public/output/matches.json" assert { type: "json" }
import getMatches from "../1-matches-per-year.js"

console.log("---------------Questions-1---------------")
const arrOfObj = getMatches(data)
console.log(arrOfObj)

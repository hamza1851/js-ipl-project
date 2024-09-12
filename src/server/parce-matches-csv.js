import * as fs from "fs"
const csv = fs.readFileSync("../data/matches.csv")

function csvToArrayOfObjects(csvFile) {
  const lines = csvFile.toString().split("\r") // Split CSV by lines
  const headers = lines[0].split(",") // First line is headers(columns)

  const result = lines.slice(1).map((line) => {
    const values = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g)
    const obj = {}

    headers.forEach((header, index) => {
      let value = values[index] ? values[index].trim() : null

      // Remove surrounding quotes if present
      if (value && value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1)
      }

      obj[header.trim()] = value
    })

    return obj
  })

  return result
}

const arrOfObj = csvToArrayOfObjects(csv)
const json = JSON.stringify(arrOfObj)
fs.writeFileSync("../public/output/matches.json", json)
console.log(json)

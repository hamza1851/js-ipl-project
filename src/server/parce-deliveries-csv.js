import csvParser from "csv-parser"
import * as fs from "fs"

const results = []

// Using the csv-parser as a stream to read from the file and pushing data into the results array
fs.createReadStream("../data/deliveries.csv")
  .pipe(csvParser())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    // Once all data has been parsed, write to file
    fs.writeFileSync(
      "../public/output/parsedDeliveriesData.json",
      JSON.stringify(results, null, 2)
    )
  })

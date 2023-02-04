const patterns = require("../src/patterns")
const fs = require("fs")

Object.values(patterns).forEach((pattern) => {
  delete pattern["match"]
})

console.log("patterms", patterns)
const json = JSON.stringify(patterns, null, 2)
fs.writeFileSync('patterns_export.json', json)


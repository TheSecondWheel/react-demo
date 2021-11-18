const fs = require("fs")
const data = fs.readFileSync("./data.txt", "utf-8")
let total = 0;
data.split("\n").forEach(record => {
    total += parseInt(record.split(",")[2])
})
console.log(total)
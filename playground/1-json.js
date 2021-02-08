const fs = require('fs')

const dataBuffer = fs.readFileSync('./1-json.json')
const dataString = dataBuffer.toString()
const data = JSON.parse(dataString)
data.name = 'Krzysiek'
data.age = 34
const newDataString = JSON.stringify(data)
fs.writeFileSync('./1-json.json', newDataString)

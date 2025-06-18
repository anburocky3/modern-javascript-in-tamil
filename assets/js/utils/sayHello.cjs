// import fs from "fs" //mjs
const fs = require('fs') // cjs

const libName = 'Greeting'

function writeInfo(text) {
  const output = __dirname + '/hello.txt'
  fs.writeFileSync(output, text)
}

exports.writeInfo = writeInfo
exports.libName = libName

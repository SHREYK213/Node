const { Console } = require('console')
const fs = require('fs')
const { json } = require('stream/consumers')
// const book = {
//     title: 'GOT',
//     author: 'Gandhi maybe?'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = (dataBuffer.toString())
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync("1-json.json")
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = "Shrey"
user.age = 23
// console.log(user.name)
// console.log(user.age)

const userJSON = JSON.stringify(user)
fs.writeFileSync("1-json.json", userJSON)
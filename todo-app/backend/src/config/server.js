const port = 3003 || process.env.port

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

// express -> chain of responsibility (middleware)

server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(allowCors)
server.listen(port, ()=>{
    console.log(`Running on ${port}`)
})

module.exports = server
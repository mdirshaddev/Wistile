require('dotenv').config({path: '.env'})
const http = require('http')
const express = require('express')
const app = express()
const server = http.Server(app)
require('./socket.io')(server)


server.listen(process.env.PORT, ()=>{
  console.log(`Server is running at PORT ${process.env.PORT}`)
})
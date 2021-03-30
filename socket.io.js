module.exports = (server) => {
  /*
    * @params server is express http server
  */
  const io = require('socket.io')(server)
  // console.log(io) //to check everything is working
  io.on("connection", (socket=>{
    socket.send("Hello from Socke.io")
    console.log("Using socket")
  }))
}
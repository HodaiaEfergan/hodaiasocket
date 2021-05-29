const express=require("express");
const { Socket } = require("socket.io");
const app= express();
const port=process.env.PORT || 8080;
const http=require("http").createServer();

const io=require("socket.io")(http);

io.on("connection",(socket)=>{

    socket.emit("welcome","welcome to the socket")
});

http.listen(port,()=>{
    console.log("server is listening on " +port)
});
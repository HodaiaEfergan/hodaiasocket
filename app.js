const io=require("socket.io-client");

let socket=io.connect("http://localhost:8080")

socket.on("welcome",data=>{

    console.log("received:",data)
});
const io=require("socket.io-client");

let socket=io.connect("http://localhost:8080"|| "https://my-socket.herokuapp.com")

socket.on("welcome",data=>{

    console.log("received:",data)
});
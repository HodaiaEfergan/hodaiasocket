const io=require("socket.io-client");
var BASE_URL="https://my-socket.herokuapp.com/"
let socket=io.connect(BASE_URL)

socket.on("welcome",data=>{

    console.log("received:",data)
});
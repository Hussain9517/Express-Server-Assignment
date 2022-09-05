
// importing express while using require method.

const express = require("express");
const app = express();

//Using Get method for sending file to the Browser.

app.get('/',(req,res) => {
    res.sendFile( __dirname + "/index.html");
})

// Allotting port to the server.

app.listen(4700,function(){
    console.log("Hey! I'm your new Server");
})

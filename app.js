const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next)=> {
    console.log("I am inside middleware");
    next();
});

app.use((req,res, next) =>{
    console.log("I am inside another middleware");
    res.send("hello from express.js");
});


const server = http.createServer(app);

server.listen(4000, ()=>{
    console.log("server is connected ");
})

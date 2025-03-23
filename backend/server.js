const express = require('express');
const user = require('./user.js');

const app = express();

app.get("/",(req,res)=>{
    res.send("server is ok");
});

app.get("/api/users",(req,res)=>{
    res.send(user);
});

const port = process.env.port || 8000; 
app.listen(port,()=>{
    console.log(`running at ${port}`);
});
const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("server is ok");
});

const port = process.env.port || 8000; 
app.listen(port,()=>{
    console.log(`running at ${port}`);
});
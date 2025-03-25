const express = require('express');
const user = require('./user.js');
const cors = require('cors');

//base 
const app = express();
app.use(cors());
app.get("/",(req,res)=>{
    res.send("server is ok");
});


// Sample data route
app.get('/api/data', (req, res) => {
    /*
    
    res.json(data);  // Send data to frontend
    */

    const data = {
        message: "Hello from Express backend!"
    };

    res.json(data);

    console.log(data.message);
});

const port = process.env.port || 8000; 
app.listen(port,()=>{
    console.log(`running at ${port}`);
});
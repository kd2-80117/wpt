const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("profile get called");
});
app.post('/',(req,res)=>{
    res.send("profile post called");
});
app.put('/',(req,res)=>{
    res.send("profile put called");
});
app.delete('/',(req,res)=>{
    res.send("profile delete called");
});

module.exports = app;
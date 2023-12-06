const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("admin get called");
});
app.post('/',(req,res)=>{
    res.send("admin post called");
});
app.put('/',(req,res)=>{
    res.send("admin put called");
});
app.delete('/',(req,res)=>{
    res.send("admin delete called");
});

module.exports = app;
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cors());
app.use((req,res,next)=>{
   
    
});

app.listen(5000,()=>{console.log("server started at port 5000")});
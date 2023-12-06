const express = require('express');
const app = express.Router();
const jwt = require('jsonwebtoken');


console.log("hello from auth.js");
app.post('/',(req,res)=>{
    console.log("request received in auth.js");
    console.log(req.body);
    //check from database
    if(req.body.username=="ritu"){
        console.log("credentials are valid");
        var tokenDetails={
            username:req.body.username,
            role:"manager"
        };

        var token = jwt.sign(tokenDetails,'333');
     
        res.setHeader("Content-Type", "application/json");
        var finalToken={jwtToken:token};
        res.send(JSON.stringify(finalToken));

    }else{
        console.log("Credentials are invalid!")
    
     var loginDetails = {
                          message: "Credentials are invalid! try again" 
                        }
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(loginDetails));
    res.end(); 
    }
});

module.exports = app;
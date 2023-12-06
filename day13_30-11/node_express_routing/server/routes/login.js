const express = require('express');
const jwt = require('jsonwebtoken');
const app = express.Router();

app.post("/", (request, response)=>{

  console.log("POST request received for LOGIN with body data as:")
  console.log(request.body);
  //Instead of IF loop below we will use DB comparison code
  if(request.body.username == "mahesh" && request.body.password=="mahesh@123")
  {
    console.log("Credentials are valid!")

    var tokenDetails = {
                         username: request.body.username,
                         role: "manager",
                         token: 4675858
                       };
    //------------------------------------JWT Generation code---------


     
    var token = jwt.sign(tokenDetails, '999999999');                  
    response.setHeader("Content-Type", "application/json");

    var finalToken = {jwtToken : token};
    
    response.write(JSON.stringify(finalToken));
    response.end(); 
  }
  else
  {
    console.log("Credentials are invalid!")
    
     var loginDetails = {
                          message: "Credentials are invalid! try again" 
                        }
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify(loginDetails));
    response.end(); 
  }
})

module.exports = app;
const express = require('express');
const mysql = require('mysql2');

const app = express();

const connectionDetails = {
    host:'localhost',
    user:'kd2_80117_ritu',
    password:'manager',
    database:'employee'
                          };

app.use((request, response, next)=>{
    // console.log(request.url);
    // console.log(request.path);
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.setHeader("Access-Control-Allow-Headers", "*");
    next();
})

app.use(express.json());    //request.body will be created here a json

app.get("/emps",(request, response)=>{

    var connection = mysql.createConnection(connectionDetails);
    var statement = `select * from emp`;
    connection.query(statement, (error, result)=>
    {
        if(error== null)
        {
            var resultInJSONString = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            connection.end();
            response.write(resultInJSONString);
            response.end();
        }
        else
        {
            var errorInJSONString = JSON.stringify(error);
            response.setHeader("Content-Type","application/json");
            connection.end();
            response.write(errorInJSONString);
            response.end();
        }
    })

});

 app.post("/emps", (request, response)=>{
   console.log("request body received is : ")
   console.log(request.body);

   var connection = mysql.createConnection(connectionDetails);

    var statement = `insert into emp values(${request.body.no},'${request.body.name}', '${request.body.address}')`;

    console.log("query prepared is : ")
    console.log(statement);
    connection.query(statement, (error, result)=>
    {
        if(error== null)
        {
            var resultInJSONString = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            connection.end();
            response.write(resultInJSONString);
            response.end();
        }
        else
        {
            var errorInJSONString = JSON.stringify(error);
            response.setHeader("Content-Type","application/json");
            connection.end();
            response.write(errorInJSONString);
            response.end();
        }
    })


 });

 app.delete("/emps/:No", (request, response)=>{
   console.log("request parameters received is : ")
   console.log(request.params.No);

   var connection = mysql.createConnection(connectionDetails);

    var statement = `delete from emp where no = ${request.params.no}`;

    console.log("query prepared is : ")
    console.log(statement);
    connection.query(statement, (error, result)=>
    {
        if(error== null)
        {
            var resultInJSONString = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            connection.end();
            response.write(resultInJSONString);
            response.end();
        }
        else
        {
            var errorInJSONString = JSON.stringify(error);
            response.setHeader("Content-Type","application/json");
            connection.end();
            response.write(errorInJSONString);
            response.end();
        }
    })


 });

  app.put("/emps/:no", (request, response)=>{
   console.log("request parameters received is : ")
   console.log(request.params.no);

   console.log("request body received is : ")
   console.log(request.body);

   var connection = mysql.createConnection(connectionDetails);

    var statement = `update emp  set name = '${request.body.name}', 
                     address ='${request.body.address}' where no=${request.params.no}`;

    console.log("query prepared is : ")
    console.log(statement);
    connection.query(statement, (error, result)=>
    {
        if(error== null)
        {
            var resultInJSONString = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            connection.end();
            response.write(resultInJSONString);
            response.end();
        }
        else
        {
            var errorInJSONString = JSON.stringify(error);
            response.setHeader("Content-Type","application/json");
            connection.end();
            response.write(errorInJSONString);
            response.end();
        }
    })


 });

app.listen(9999, ()=>{console.log("server started at 9999")})
const express = require('express');
const app = express.Router();
const mysql = require('mysql2');

const connectionDetails ={
    host:'localhost',
    user:'kd2_80117_ritu',
    password:'manager',
    database:'employee'
}

app.get('/',(request,response)=>{
    const connection = mysql.createConnection(connectionDetails);
    var statement = `select * from emp`;
    connection.query(statement,(error,result)=>{
        if(error == null){
            response.setHeader("content-type","application/json");
            connection.end();
            //console.log(result);
            response.send(JSON.stringify(result));
        
        }else{
            response.setHeader("content-type","application/json");
            connection.end();
            response.send(JSON.stringify(error));
        }
    });
});


app.post('/',(request,response)=>{
    console.log(request.body);
    console.log("hello from app post");
    const connection = mysql.createConnection(connectionDetails);
    var statement = `insert into emp(name,address) values('${request.body.name}','${request.body.address}')`;
    connection.query(statement,(error,result)=>{
        if(error == null){
            response.setHeader("content-type","application/json");
            connection.end();
            response.send(JSON.stringify(result));
        }else{
            response.setHeader("content-type","application/json");
            connection.end();
            response.send(JSON.stringify(error));
        }
    });
});

app.put('/:no',(request,response)=>{
    const connection = mysql.createConnection(connectionDetails);
    var statement = `update emp set name='${request.body.name}',address='${request.body.address}' where no=${request.params.no}`;
    console.log("query is : ")
    console.log(statement);
    connection.query(statement,(error,result)=>{
        if(error==null){
            response.setHeader("content-type","application/json");
            connection.end();
            response.send(JSON.stringify(result));
        }else{
            response.setHeader("content-type","application/json");
            connection.end();
            response.send(JSON.stringify(result));
        }
    });
});

app.delete('/:no',(request,response)=>{
   
    console.log("Requested parameters recieved is :");
    console.log(request.params);
    const connection = mysql.createConnection(connectionDetails);
    var statement = `delete from emp where no = ${request.params.no}`;
    connection.query(statement,(error,result)=>{
        if(error == null){
            response.setHeader("content-type","application/json");
            connection.end();
            response.send(JSON.stringify(result));
        }else{
            response.setHeader("content-type","application/json");
            connection.end();
            response.send(JSON.stringify(error));
        }
    });
});

module.exports = app;
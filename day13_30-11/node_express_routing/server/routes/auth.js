var express = require('express');
var mysql = require('mysql2');

const app = express().Router();


const connectionDetails ={
    host:'localhost',
    user:'kd2_80117_ritu',
    password:'manager',
    database:'employee'
}

app.post('/',(req,res)=>{
    console.log(req.body);
    const connection = mysql.createConnection(connectionDetails);
    var statement = `select * from emp where name='${req.body.name}'`;
    console.log(statement);
    connection.query(statement,(error,result)=>{
        console.log(result.length);
        if(error==null){
            connection.end();
            res.setHeader("content-type","application/json");
            res.send(JSON.stringify(result));
        }else{
                connection.end();
                res.setHeader("content-type","application/json");
                res.send(JSON.stringify(error));
        }
    });

});

module.exports =app;
const express = require('express');
const app = express.Router();
const mysql = require('mysql');
const config = require('config');
const cors = require('cors');

app.use(cors());
app.use(express.json());
const connect={
    host: config.get("host"),
    database:config.get("database"),
    user:config.get("user"),
    password:config.get("password")
}

app.get("/",(req,res)=>{
    
    const stmt = `select * from customers`;
    console.log(stmt);
    const connection = mysql.createConnection(connect);
    connection.query(stmt,(error,result)=>{
        if (error == null) {
           
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(result));
            connection.end();
            res.end();
        } else {
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(error));
            connection.end();
            res.end();
        }
    });

});

app.post("/",(req,res)=>{
    
    const stmt = `insert into customers(custname,mobileno,pin) values('${req.body.custname}','${req.body.mobileno}',
    '${req.body.pin}')`;
    console.log(stmt);
    const connection = mysql.createConnection(connect);
    connection.query(stmt,(error,result)=>{
        if (error == null) {
            console.log(result);
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(result));
            connection.end();
            res.end();
        } else {
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify(error));
            connection.end();
            res.end();
        }
    });

});

app.put("/:custid",(req,res)=>{
    
    const stmt = `update customers set custname = '${req.body.custname}',mobileno='${req.body.mobileno}',pin='${req.body.pin}' where custid=${req.params.custid}`;
    console.log(stmt);
    const connection = mysql.createConnection(connect);
    connection.query(stmt,(error,result)=>{
        if (error == null) {
            console.log(result);
            connection.end();
            res.send(result);
        } else {
            connection.end();
            res.send(error);
        }
    });

});

app.delete("/:custid",(req,res)=>{
    
    const stmt = `delete from customers where custid = ${req.params.custid} `;
    console.log(stmt);
    const connection = mysql.createConnection(connect);
    connection.query(stmt,(error,result)=>{
        if (error == null) {
            console.log(result);
            connection.end();
            res.send(JSON.stringify(result));
        } else {
            connection.end();
            res.send(JSON.stringify(error));
        }
    });

});

module.exports = app;
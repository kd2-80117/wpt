const express = require('express');
const app = express();
const config = require('config');

const cors = require('cors');
const customerRoute = require('./routes/customer');

app.use(cors());
app.use(express.json());

app.use("/customers",customerRoute);


// const connect={
//     host: config.get("host"),
//     database:config.get("database"),
//     user:config.get("user"),
//     password:config.get("password")
// }

// app.get("/customers",(req,res)=>{
    
//     const stmt = `select * from customers`;
//     console.log(stmt);
//     const connection = mysql.createConnection(connect);
//     connection.query(stmt,(error,result)=>{
//         if (error == null) {
//             console.log(result);
//             connection.end();
//             res.send(result);
//         } else {
//             connection.end();
//             res.send(error);
//         }
//     });

// });

// app.post("/customers",(req,res)=>{
    
//     const stmt = `insert into customers(custname,mobileno,pin) values('${req.body.custname}','${req.body.mobileno}',
//     '${req.body.pin}')`;
//     console.log(stmt);
//     const connection = mysql.createConnection(connect);
//     connection.query(stmt,(error,result)=>{
//         if (error == null) {
//             console.log(result);
//             connection.end();
//             res.send(result);
//         } else {
//             connection.end();
//             res.send(error);
//         }
//     });

// });

// app.put("/customers/:custid",(req,res)=>{
    
//     const stmt = `update customers set custname = '${req.body.custname}',mobileno='${req.body.mobileno}',pin='${req.body.pin}' where custid=${req.params.custid}`;
//     console.log(stmt);
//     const connection = mysql.createConnection(connect);
//     connection.query(stmt,(error,result)=>{
//         if (error == null) {
//             console.log(result);
//             connection.end();
//             res.send(result);
//         } else {
//             connection.end();
//             res.send(error);
//         }
//     });

// });

// app.delete("/customers/:custid",(req,res)=>{
    
//     const stmt = `delete from customers where custid = ${req.params.custid} `;
//     console.log(stmt);
//     const connection = mysql.createConnection(connect);
//     connection.query(stmt,(error,result)=>{
//         if (error == null) {
//             console.log(result);
//             connection.end();
//             res.send(result);
//         } else {
//             connection.end();
//             res.send(error);
//         }
//     });

// });

app.listen(config.get("port"),()=>{console.log("server started at 5000 port")});
const express = require('express');
const app = express.Router();
const mysql = require('mysql2');

var connectionDetails = {

    host: "localhost",
    database: "kdac",
    user: "root",
    password: "manager"

};


app.get("/", (request, response) => {


    var statement = `select * from products`;
    var connection = mysql.createConnection(connectionDetails);
    connection.query(statement, (result, erorr) => {
        if (erorr == null) {

            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else {

            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(erorr));
            connection.end();
            response.end();
        }
    })



})


app.post("/", (request, response) => {

    var statement = `insert into products (producttitle,price,stock) values('${request.body.producttitle}',${request.body.price},${request.body.stock})`;

    var connection = mysql.createConnection(connectionDetails);
    connection.query(statement, (result, erorr) => {
        if (erorr == null) {
            console.log(result);

            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else {

            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(erorr));
            connection.end();
            response.end();
        }
    })

})

app.put("/:productid",(request,response)=>{
    var statement = `update  products set  producttitle='${request.body.producttitle}', price=${request.body.price} ,stock=${request.body.stock} where productid=${request.params.productid} `;
    var connection = mysql.createConnection(connectionDetails);
    connection.query(statement, (result, erorr) => {
        if (erorr == null) {

            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else {

            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(erorr));
            connection.end();
            response.end();
        }
    })


})

app.delete("/:productid",(request,response)=>{
    var statement = `delete  from products  where productid=${request.params.productid} `;
    var connection = mysql.createConnection(connectionDetails);
    connection.query(statement, (result, erorr) => {
        if (erorr == null) {

            response.setHeader("Content-Type", "application/json");''
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }
        else {

            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(erorr));
            connection.end();
            response.end();
        }
    })


})





module.exports = app;
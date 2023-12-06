const http = require('http');
const mysql = require('mysql2');
const connectionDetails = {
                            host:'localhost',
                            database:'employee',
                            user:'kd2_80117_ritu',
                            password:'manager'
                            };
const helper = http.createServer((request,response)=>{

    console.log(`you requested ${request.url} url via ${request.method} method`);

    if(request.url=='/emp' && request.method=='GET'){
       
        var connection = mysql.createConnection(connectionDetails);
        //connection.connect();
        var mysql_query = "select * from emp";
        connection.query(mysql_query,(error,result)=>{
            if (error == null) {
               response.setHeader("content-Type","application/json");
               var data= JSON.stringify(result);           
                response.write(data);
                connection.end();
                response.end();
            }else {
                response.setHeader("Content-Type","application/json");
                var data= JSON.stringify(error)
                response.write(data);
                connection.end();
                response.end();
            }
            
        });
    }else if (request.url=='/emp' && request.method=='POST') {
        const connection = mysql.createConnection(connectionDetails);
        //connection.connect();
        var mysql_query = "insert into emp values(18,'ram',5000,'surat',null)";
        connection.query(mysql_query,(error,result)=>{
            if (error == null) {
                response.setHeader("content-type","application/json");
                response.write(JSON.stringify(result));
                connection.end();
                response.end();
            }else {
                response.setHeader("content-type","application/json");
                response.write(JSON.stringify(error));
                connection.end();
                response.end();
            }
            
        });
    }else if (request.url=='/emp' && request.method=='PUT') {
        const connection = mysql.createConnection(connectionDetails);
        //connection.connect();
        var mysql_query = "update emp set city='vapi' where empno=18";
        connection.query(mysql_query,(error,result)=>{
            if (error == null) {
                response.setHeader("content-type","application/json");
                response.write(JSON.stringify(result));
                connection.end();
                response.end();
            }else {
                response.setHeader("content-type","application/json");
                response.write(JSON.stringify(error));
                connection.end();
                response.end();
            }
    
    })
} else if (request.url=='/emp' && request.method=='DELETE') {
    const connection = mysql.createConnection(connectionDetails);
    //connection.connect();
    var mysql_query = "delete from emp where empno = 17";
    connection.query(mysql_query,(error,result)=>{
        if (error == null) {
            response.setHeader("content-type","application/json");
            response.write(JSON.stringify(result));
            connection.end();
            response.end();
        }else {
            response.setHeader("content-type","application/json");
            response.write(JSON.stringify(error));
            connection.end();
            response.end();
        }

})
} else {
        response.setHeader("Content-Type","text/plain");
        response.write("This webpage does not exist.");
        response.end();
}

 });


helper.listen(7778,()=>{console.log("server started")});
const http = require('http');
const helper = http.createServer((request,response)=>{
    console.log(request.url);
    if(request.url=='/about'){
        response.setHeader("content-type","html");
        var html = `<html>
                    <head><title>about</title></head>
                    <body><h1>About page</h1></body>
                    </html>
                    `;
        response.write(html);
    }else if (request.url=='/') {
        response.write("this is home.")
    }else{
        response.setHeader("content-type","text");
        response.write("Cannot serve web page.");
    }
    response.end();
});
helper.listen(7777,()=>{console.log("server started at port 7777")});
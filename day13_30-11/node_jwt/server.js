const express = require('express');
const app = express();

const empRoutes = require('./emp');
const authRoutes = require('./auth');

const jwt = require('jsonwebtoken');

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use((req,res,next)=>{
    console.log("hello from server.js");
    if(!req.url.includes('login')){
        console.log(req.headers.authorization);
        if(req.headers.authorization!=undefined){
            var splitContent = req.headers.authorization.split(' ');
            console.log(splitContent);
            var token = splitContent[1];
            console.log("Token is "+token);
            var decryptedToken = jwt.verify(token,'333');
            console.log("decrypted Token = "+decryptedToken);
            if(decryptedToken.username=="ritu"){
                console.log("ritu hello");
                next();
            }else{
                var responseText = {action:'invalidtoken'};
                res.send(responseText);
            }
        }
    else{
        var responseText={action:'login'};
        res.send(responseText);
    }
}
    else{
       next();
    }
});

app.use("/login",authRoutes);
app.use("/emp",empRoutes);

app.listen(5555,()=>console.log("server started on 5555 port"));


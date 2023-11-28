const fs = require('fs');
console.log("HI");
//////sync function
 var files =fs.readdirSync("/home/ritupowar/Desktop/My_GitData");
 files.map((file)=>console.log(file));
 console.log("bye");
 console.log("-----------------------------------------");
 /////async function
 console.log("HI");
fs.readdir("/home/ritupowar/Desktop/My_GitData",
(error,file)=>{
    if(error == null){
        files.map((file)=>console.log(file));
    }
});
console.log("bye");
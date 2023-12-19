const express = require('express');
const app = express();


const cors = require('cors');
app.use(cors());
app.use(express.json());

const  appWithDetailsOfProduct = require('./Routes/product.js');


app.use("/product",appWithDetailsOfProduct);

app.listen(5000 , ()=>{
    console.log(`server started at 5000`);
})

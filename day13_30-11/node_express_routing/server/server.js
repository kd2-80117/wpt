const express = require('express');
const cors = require('cors');
const app = express();

const routeLogin = require('./routes/login');
const routeEmp = require('./routes/emp');
const routeAdmin = require('./routes/admin');
const routeProfile = require('./routes/profile');
const routeAuth = require('./routes/auth');

app.use(express.json());

app.use(cors());


app.use("/login",routeLogin);
app.use("/auth",routeAuth);
app.use("/emp",routeEmp);
app.use("/profile",routeProfile);
app.use("/admin",routeAdmin);


app.listen(9995,()=>(console.log("Server started")));

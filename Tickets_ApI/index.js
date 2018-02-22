 //Create simple WebApi(WebService)

//import express
const express =require('express');
//import mongoose connector
const mongoose = require('mongoose');
//import body-parser: JSON parser/
const bodyParser = require('body-parser');

//import modules
//const login = require('./models/LoginModels');
const login = require('./api/routes/Login');
// const products = require('./api/Routes/products');
//////////////////////////////////////////////////
//connect mongodb
mongoose.connect('mongodb://localhost/TicketingSytems');

//Testing that database connected
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected with mongodb');
}); 

//Create Application object
const app = express();


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//register routers with application object
app.use('/api/routes/Login',login);

//start the server
app.listen(8083,()=>{
    console.log(`The Express Server is Ready!`);
})
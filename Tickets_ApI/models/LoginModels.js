const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema({
    userId : String,
    userName : String,
    password : String,
    isActive : String,
    createdBy : Date
});

module.exports = mongoose.model('Login', LoginSchema, "Login");
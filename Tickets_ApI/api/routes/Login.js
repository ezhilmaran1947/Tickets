//Create simple WebApi (WebService)
//Import express
const express = require('express');
const mongoose = require('mongoose');



const usersRouter = express.Router();
const Login=require('../../models/LoginModels');

//model
const login = [{ userId: 1, userName: "Ezhil", password:"ABCD", isActive:"1", createdBy:Date }];



usersRouter.post('/login', (req, res) => {
    //res.json(users);
    res.status(200).json(Login);
});
usersRouter.get('/', (req, res) => {
    Login.find()
        .exec()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => { 
            res.status(500).json({
                error: err
            });
        });
})
//api/products
usersRouter.post("/", (req, res) => {
    console.log(`Client Submitted data ${req.body}`);
    const {
        userName,
        password,
        isActive 
    } = req.body;
    const login = new Login({
        userId: new mongoose.Types.ObjectId(),
        userName: userName,
        password: password,      
        isActive: isActive,
        createdBy: new Date()
    });
    login.save()
        .then(response => {
            console.log(response)
            res.status(201).json(response)
        })
        .catch(err => console.log(err));
});
module.exports = usersRouter;
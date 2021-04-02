const express = require('express');
const User = require('../models/userModel');
const expressAsyncHandler = require('express-async-handler');
const data = require('../data');

const userRouter = express.Router();

userRouter.get('/', expressAsyncHandler(async(req, res) => {
    // await User.remove({});
    const users = await User.find({});
    res.send(users);
}))

userRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers});
}))

module.exports = userRouter;
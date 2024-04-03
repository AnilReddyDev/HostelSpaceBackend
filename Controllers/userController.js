const asyncHandler = require('express-async-handler');
const User = require('../Model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email && !password) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    } 
    const user = await User.findOne({email});

    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user:{
                username: user.username,
                id: user.id
            }
        },process.env.ACCESS_TOKEN_SECRET,{expiresIn: "15m"});
        res.status(200).json({message:"login success",token:accessToken})
    }
    else{
        res.status(401);
        throw new Error("All fields are mandatory !")
    }

    
});

const signInUser = asyncHandler(async (req, res) => {
    const {username,password,email} = req.body;
    if(!username || !password || !email){
        res.status(401);
        res.json({error:"enter all fields"})
    }
    
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(401);
        res.json({error:"user already exists"})
    }

    const hasedPassword = await bcrypt.hash(password,12);

    const user = await User.create({
        username,
        email,
        password:hasedPassword
    })
    if(user){
        const accessToken = jwt.sign({
            user:{
                username: user.username,
                id: user.id
            }
        },process.env.ACCESS_TOKEN_SECRET,{expiresIn: "15m"});
        res.status(200).json({message:"signup success",token:accessToken})
    }else{
        res.status(401);
        res.json({error:"invalid credentials"})
    }
})

const updateUser = asyncHandler(async (req, res) => {
    res.json({mess:"updateUser World"})
})

const deleteUser = asyncHandler(async (req, res) => {
    res.json({mess:"deleteUser World"})
})

const getUser = asyncHandler(async (req, res) => {
    res.json({mess:"getUser World"})
})



module.exports = { loginUser, signInUser, updateUser, deleteUser, getUser }
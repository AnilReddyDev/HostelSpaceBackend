const asyncHandler = require('express-async-handler');

const loginUser = asyncHandler(async (req, res) => {
    res.json({mess:"login World"})
})

const signInUser = asyncHandler(async (req, res) => {
    res.json({mess:"signIn World"})
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
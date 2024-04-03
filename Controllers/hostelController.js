const asyncHandler = require('express-async-handler');

const addHostel = asyncHandler(async (req, res) => {
    res.json({mess:"addHostel World"})
})  

const gethostel = asyncHandler(async (req, res) => {
    res.json({mess:"gethostel World"})
})

const updateHostel = asyncHandler(async (req, res) => {
    res.json({mess:"updateHostel World"})
})

const deleteHostel = asyncHandler(async (req, res) => {
    res.json({mess:"deleteHostel World"})
})

module.exports = { addHostel, gethostel, updateHostel, deleteHostel }

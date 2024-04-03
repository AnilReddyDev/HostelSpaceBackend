const mongoose = require('mongoose')

const hostelSchema = new mongoose.Schema({
    hostelName:{
        type: String,
        required: [true, 'Please add a name']
    },
    hostelLocation:{
        type: String,
        required: [true, 'Please add a location']
    },
    hostelDescription:{
        type: String,
        required: [true, 'Please add a description']
    },
    accomadationType:{
        type: String,
        required: [true, 'Please add a type']
    },
    typeOfRoom:{
        type: String,
        required: [true, 'Please add a room type']
    },
    price:{
        type: Array,
        required: [true, 'Please add a price']
    },
    facilities:{
        type: Array,
        required: [true, 'Please add a facility']
    },
    ownerName:{
        type: String,
        required: [true, 'Please add a name']
    },
    ownerEmail:{
        type: String,
        required: [true, 'Please add a email']
    },
    ownerPhone:{
        type: Number,
        required: [true, 'Please add a phone number']
    },
    ownerAddress:{
        type: String,
        required: [true, 'Please add a address']
    }
})
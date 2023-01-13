const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    title : {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: 2,
        maxLength:50
    },
    type : {
        type: Number,
        required: true,
        trim: true
    },
    // from user model
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    pricePerDay : {
        type: Number,
        required: true,
        trim: true
    },
    // images list
    images : {
        type: [String],
        required: true
    },
    description : {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength:500
    },
    // address with object street, city and zip
    address : {
        type: {
            street: {
                type: String,
                required: true,
                trim: true,
                minLength: 2,   
                maxLength:50
            },
            city: {
                type: String,
                required: true,
                trim: true,
                minLength: 2,
                maxLength:50
            },
            zip: {
                type: Number,
                required: true,
                trim: true
            },
            required: true
        },
        // gps lat and long
        location: {
            type: {
                lat: {
                    type: Number,
                    required: true,
                    trim: true
                },
                long: {
                    type: Number,
                    required: true,
                    trim: true
                }
            },
            required: true
        },
        required: true
    },


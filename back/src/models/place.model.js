//nySOThIhTbQjwfNt
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

})

module.exports=mongoose.model('Place', placeSchema)
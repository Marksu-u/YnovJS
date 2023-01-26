const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    title: {
        type: String,

        trim: true,
        lowercase: true,
        minLength: 2,
        maxLength: 50
    },
    type: {
        type: Number,

        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    pricePerDay: {
        type: Number,

        trim: true
    },
    images: {
        type: [String],
    },
    description: {
        type: String,

        trim: true,
        minLength: 2,
        maxLength: 500
    },
    address: {
        type: {
            street: {
                type: String,

                trim: true,
                minLength: 2,
                maxLength: 50
            },
            city: {
                type: String,

                trim: true,
                minLength: 2,
                maxLength: 50
            },
            zip: {
                type: Number,

                trim: true
            },
        },
        location: {
            type: {
                lat: {
                    type: Number,

                    trim: true
                },
                long: {
                    type: Number,

                    trim: true
                }
            },
        },
    },

})

module.exports = mongoose.model('Place', placeSchema)
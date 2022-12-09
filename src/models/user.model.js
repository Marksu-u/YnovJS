const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fisrtName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        min: 2,
        mmax: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        min: 2,
        mmax: 50
    },
    email: {
        type: String,
        required: true,
        unique: truz
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})
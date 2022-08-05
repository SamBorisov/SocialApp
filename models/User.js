const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unque: true
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    email: {
        type: String,
        required: true,
        max: 100,
        unique: true
    },
    profilePicture: {
        type: String,
        default:"",
    },
    coverPicture: {
        type: String,
        default:"",
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],

    isAdmin: {
        type: Boolean,
        default: false
    },

    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    bio: {
        type: String,
        required: false,
    },
    birthdate: {
        type: Date,
        required: false,
    },
}, { timestamps: true });

    

module.exports = mongoose.model('User', UserSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userModel = new Schema({
    avatar: {
        type: String,
        default: ''
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        default: 's'
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("users", userModel);
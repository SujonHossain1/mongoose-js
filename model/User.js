const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30,
        mixlength: 2,
        lowercase:true
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    dataOfBirth: {
        type: Date,
        default: Date.now,
        required: false
    }
});

const UserModel = new mongoose.model('user', UserSchema);

module.exports = UserModel;
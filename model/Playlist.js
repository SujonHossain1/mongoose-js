const mongoose  = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
    },
    course_type: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['frontend', 'backend', 'database']
    },
    isActive: Boolean,
    videos: {
        type: Number,
        // min: 0,
        validate(value){
            if(value < 0){
                throw new Error('video number should not be negative');
            }
        },
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const PlaylistModel = new mongoose.model('Playlist', PlaylistSchema);
module.exports = PlaylistModel;
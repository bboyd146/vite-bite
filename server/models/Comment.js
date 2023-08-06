const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema ({
    content: {
        type: String,
        required: true,
        maxLength: 350,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
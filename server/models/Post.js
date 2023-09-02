const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
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
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    re_post: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    }
},
    { timestamps: true });

const Post = mongoose.model('Post', postSchema)

module.exports = Post;
const mongoose = require('mongoose');
const { Schema } = mongoose;

const NewFollowSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'declined'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    }
}, { timestamps: true });


const NewFollow = mongoose.model('NewFollow', NewFollowSchema)

module.exports = NewFollow
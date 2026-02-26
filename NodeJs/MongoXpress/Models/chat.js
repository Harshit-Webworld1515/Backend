const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    msg:{
        type: String,
        maxlength: 100
    },
    from:{
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    }
    ,created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        }
});
const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
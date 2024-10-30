const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = new Schema({
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'users' }, 
    createdAt: { type: Date, default: Date.now }
});

const commentModel = mongoose.model('Comment', commentSchema);
module.exports = commentModel;
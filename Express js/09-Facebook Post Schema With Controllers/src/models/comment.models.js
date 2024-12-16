import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required: true,
    },
    content: {
        type: String,
        required: true
    },
})

export default mongoose.model('comment', commentSchema)
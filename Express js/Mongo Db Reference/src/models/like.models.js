import mongoose from "mongoose";


const likeSchema = new mongoose.model({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    PostId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
})

export default mongoose.model('like', likeSchema)
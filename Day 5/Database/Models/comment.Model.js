import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
    content: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    postId: {
        type: mongoose.Types.ObjectId,
        ref: "post"
    }

},
    {
        timestamps: true,
        versionKey: false
    })


export const commentModel = mongoose.model("comment", commentSchema);


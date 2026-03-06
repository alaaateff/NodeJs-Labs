import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    userId:{
        type: mongoose.Types.ObjectId,
        ref: "user"
    }
},
{
    timestamps: true,
    versionKey: false
})


export const postModel = mongoose.model("post", postSchema);


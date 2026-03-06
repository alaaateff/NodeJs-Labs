import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    name: String,
    description: String
})

export const PostsModel = mongoose.model("Post" , PostSchema)

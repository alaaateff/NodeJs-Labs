import { PostsModel } from "../../Database/Models/Posts.Models.js";

const getPosts = async (req,res) => {
    let posts = await PostsModel.find()
    res.json({message: "Posts are ", data: posts})
}

const getOnePost = async (req , res) =>{
    let requiredPost = await PostsModel.findById(req.params.id);
    res.status(200).json({message: "required post" , data: requiredPost})
}

const createPost = async (req,res) =>{
    let newPost = await PostsModel.insertMany(req.body);
    res.status(201).json({message: "Post Created", data: newPost})
}

const updatePost = async (req , res) =>{
    let updatedPost = await PostsModel.findByIdAndUpdate(req.params.id , req.body , {new : true})
    res.status(200).json({message: "Post updated", data: updatedPost})
}

const deletePost = async (req , res) =>{
    let deletedPost = await PostsModel.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Post Deleted", data: deletedPost});
}

export {getPosts , getOnePost , createPost , updatePost , deletePost}
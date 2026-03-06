import { postModel } from "../../Database/Models/post.Model.js";

let createPost = async (req, res) => {
    let decoded = req.decoded
    req.body.userId = decoded._id
    let newPost = await postModel.insertMany(req.body);
    res.json({ message: "New post", data: newPost });
}

let deletePost = async (req,res) =>{
    let id = req.params.id;
    let decoded = req.decoded
    let myposts = await postModel.find({userId: decoded._id})
    for(let i =0 ; i < myposts.length; i++){
        if(id == myposts[i].id){
            let deletedPost = await postModel.findByIdAndDelete(id);
            return res.json({message: "Post Deleted"});
        }
        
    }
    return res.json({message: "this post isn't belong to you"});
    
}

let myPosts = async(req,res) => {
    let decoded = req.decoded
    let myposts = await postModel.find({userId: decoded._id})
    res.json({message: "My Posts", data: myposts});
}

let updatepost = async(req , res)=> {
    let id = req.params.id;
    let decoded = req.decoded;
    let myposts = await postModel.find({userId: decoded._id})
    for(let i =0 ; i < myposts.length; i++){
        if(id == myposts[i].id){
            let updatedPost = await postModel.findByIdAndUpdate(req.params.id , req.body , {new : true})
            return res.json({message: "Post updated" , data:updatedPost});
        }
        
    }
    return res.json({message: "this post isn't belong to you"});




}

export {createPost, myPosts, deletePost , updatepost}
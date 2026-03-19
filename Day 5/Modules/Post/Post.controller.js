import { postModel } from "../../Database/Models/post.Model.js"
import jwt from "jsonwebtoken"
import catchError from "../../Middleware/catchError.js"

let listPosts = catchError( async (req, res) => {
    let posts  = await postModel.find().populate("createdBy")
    res.json({mesaage: "List Of posts", data: posts});
}

)

let createPost =catchError( async(req,res) => {
         let decoded = req.decoded
         req.body.createdBy = decoded._id
          let addpost  = await postModel.insertMany(req.body); 
          res.json({mesaage: "post Added", data: addpost});
}
)
let deletePost = catchError(async (req,res) =>{
    let id = req.params.id;
    let decoded = req.decoded

    let post = await postModel.findById(id) ;
    if(post.createdBy.equals(decoded._id)){
       let deletePost = await postModel.findByIdAndDelete(id);
         return res.json({mesaage: "post Deleted"});
    }
    res.status(422).json({mesaage: "cannot delete this post"});
}
)

let myposts = catchError(async(req,res) => {
    let decoded = req.decoded
    let myposts = await postModel.find({createdBy: decoded._id})
    res.json({mesaage: "My posts", data: myposts});
}

)
let updatePost = catchError(async(req,res)=>{
          let id = req.params.id ;
          let decoded = req.decoded

          let post = await postModel.findById(id) ;
    if(post.createdBy.equals(decoded._id)){
         await postModel.findByIdAndUpdate(id, req.body, { new: true });
         return res.json({mesaage: "post updated"});
    }
        res.status(422).json({mesaage: "cannot update this post"});

}
)

export {listPosts, createPost, deletePost, myposts , updatePost}
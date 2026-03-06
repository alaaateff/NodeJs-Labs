import express from "express"; 
import verifyToken from "../../Middleware/verifyToken.js";
import {createPost, myPosts, deletePost , updatepost} from "./post.controller.js"

let postRoutes = express.Router()
postRoutes.use(verifyToken)

postRoutes.post("/posts", createPost);
postRoutes.get("/posts" ,myPosts);
postRoutes.delete("/post/:id" ,deletePost);
postRoutes.put("/post/:id" ,updatepost);


export default postRoutes
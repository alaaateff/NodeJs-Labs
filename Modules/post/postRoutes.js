import express from "express"; 
import verifyToken from "../../Middleware/verifyToken.js";
import {createPost, myPosts, deletePost , updatepost} from "./postController.js"
import validationMiddlewarepost from "../../Middleware/postValidation.js";


let postRoutes = express.Router()
postRoutes.use(verifyToken)

postRoutes.post("/posts",validationMiddlewarepost , createPost);
postRoutes.get("/posts" ,myPosts );
postRoutes.delete("/post/:id" ,deletePost);
postRoutes.put("/post/:id" ,updatepost);


export default postRoutes
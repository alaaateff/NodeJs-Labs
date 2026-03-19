import express from "express"; 
import { listPosts, createPost, deletePost, myposts , updatePost} from "./Post.controller.js";
import verifyToken from "../../Middleware/verifyToken.js";
import postValidation from "../../Middleware/postValidation.js";

let postRoutes = express.Router();
postRoutes.use(verifyToken) 

postRoutes.get("/posts", listPosts);
postRoutes.post("/posts",postValidation, createPost);
postRoutes.delete("/posts/:id", deletePost);
postRoutes.get("/myposts", myposts);
postRoutes.put("/posts/:id", updatePost);



export default postRoutes;
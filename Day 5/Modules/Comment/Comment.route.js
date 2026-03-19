import express from "express"; 
import { listMyComments, createComment, deleteComment , updateComment} from "./Comment.controller.js";
import verifyToken from "../../Middleware/verifyToken.js";
import commentValidation from "../../Middleware/commentValidation.js";
let commentRoutes = express.Router();
commentRoutes.use(verifyToken) 

commentRoutes.post("/comments",commentValidation , createComment);
commentRoutes.delete("/comments/:id", deleteComment);
commentRoutes.get("/mycomments", listMyComments);
commentRoutes.put("/comments/:id", updateComment);



export default commentRoutes;
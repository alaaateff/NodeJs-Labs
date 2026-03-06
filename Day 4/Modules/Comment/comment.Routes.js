import express from "express"; 
import verifyToken from "../../Middleware/verifyToken.js";
import {createComment, deleteComment, myComments , updatecomment} from "./comment.controller.js"

let commentRoutes = express.Router()
commentRoutes.use(verifyToken)

commentRoutes.post("/comments" , createComment);
commentRoutes.get("/comments" ,myComments );
commentRoutes.delete("/comments/:id" ,deleteComment);
commentRoutes.put("/comments/:id" ,updatecomment);


export default commentRoutes


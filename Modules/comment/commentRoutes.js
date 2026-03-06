import express from "express"; 
import verifyToken from "../../Middleware/verifyToken.js";
import {createComment, deleteComment, myComments , updatecomment} from "./commentController.js"
import validationMiddlewarecomment from "../../Middleware/commentValidation.js";

let commentRoutes = express.Router()
commentRoutes.use(verifyToken)

commentRoutes.post("/comments" ,validationMiddlewarecomment, createComment);
commentRoutes.get("/comments" ,myComments );
commentRoutes.delete("/comments/:id" ,deleteComment);
commentRoutes.put("/comments/:id" ,updatecomment);


export default commentRoutes


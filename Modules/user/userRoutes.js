import express from "express";
import {signup, signin, verifyAccount} from "./userController.js";
import checkEmail from "../../Middleware/checkEmail.js";
import hashPassword from "../../Middleware/hashPassword.js";
import validationMiddleware  from "../../Middleware/validation.js"


let userRoutes = express.Router();

userRoutes.post("/signup",validationMiddleware,checkEmail,hashPassword, signup);
userRoutes.post("/signin",validationMiddleware,checkEmail, signin)
userRoutes.get("/verify/:email", verifyAccount)


export default userRoutes


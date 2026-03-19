import express from "express";
import { listUsers, signin, signup ,verifyEmail} from "./User.controller.js";
import checkEmail from "../../Middleware/checkEmail.js";
import hashPassword from "../../Middleware/hashPassword.js";
import validationMiddleware from "../../Middleware/validationMiddleware.js";

let userRoutes = express.Router();

userRoutes.get("/users", listUsers);
userRoutes.post("/signup",validationMiddleware,checkEmail,hashPassword, signup);
userRoutes.post("/signin",validationMiddleware,checkEmail, signin)
userRoutes.get("/verify/:email", verifyEmail)

export default userRoutes
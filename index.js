import express from "express";
import {connection} from "./Database/dbconnect.js"
import userRoutes from "./Modules/user/userRoutes.js";
import postRoutes from "./Modules/post/postRoutes.js";
import commentRoutes from "./Modules/comment/commentRoutes.js";

const app = express();
app.use(express.json());
connection;
app.use(userRoutes)
app.use(postRoutes)
app.use(commentRoutes)

app.listen(3000 , ()=>{console.log("server is running")})
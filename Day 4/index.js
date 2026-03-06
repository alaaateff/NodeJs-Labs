import express from "express";
import {connection} from "./Database/dbconnect.js"
import userRoutes from "./Modules/User/user.Routes.js";
import postRoutes from "./Modules/Post/post.Routes.js";
import commentRoutes from "./Modules/Comment/comment.Routes.js";

const app = express();
app.use(express.json());
connection;
app.use(userRoutes)
app.use(postRoutes)
app.use(commentRoutes)

app.listen(3000 , ()=>{console.log("server is running")})
import express from "express"
import { dbconnect } from "./Database/dbconnect.js"
import userRoutes from "./Modules/User/User.route.js"
import postRoutes from "./Modules/Post/Post.route.js"
import commentRoutes from "./Modules/Comment/Comment.route.js"


const app = express()
dbconnect
app.use(express.json())
app.use(userRoutes)
app.use(postRoutes)
app.use(commentRoutes)

app.listen(3000,()=>{
    console.log("server is running")
}) ;
import mongoose from "mongoose";

export const conn = mongoose.connect('mongodb://127.0.0.1:27017/mydb')
.then(()=>console.log("connected successfully"))
.catch((err) => console.log(err))
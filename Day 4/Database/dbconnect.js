import mongoose from "mongoose"

export const connection = mongoose.connect('mongodb://127.0.0.1:27017/newdb')
.then(()=> {console.log("database connected")})
.catch((e)=>{console.log(e)})

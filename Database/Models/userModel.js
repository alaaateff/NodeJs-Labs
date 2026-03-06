import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        minlength: 7, 
        maxlength: 30
    },
    email: {
        type: String,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 40
    },
    isConfirmed: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
},{
    timestamps: true, 
    versionKey: false 
})



const userModel = model("User", userSchema);

export default userModel
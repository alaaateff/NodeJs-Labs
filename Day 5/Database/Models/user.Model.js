import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 7,
        maxlength: 50
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
        min: 22,
        max: 60
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
},{timestamps: true , versionKey: false})

const userModel = mongoose.model("user" , userSchema );
export default userModel
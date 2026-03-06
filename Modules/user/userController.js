import userModel from "../../Database/Models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendEmail } from "../../Email/Email.js";
import catchError from "../../Middleware/catchError.js";


let signup = catchError( async (req, res) => {
    let addUser = await userModel.insertMany(req.body); 
    sendEmail(req.body.email)
    addUser[0].password = undefined
    res.json({message: "User Added", data: addUser})
})


let signin = async (req, res) => {
    let foundUser = req.foundUser
    let matchPassword = bcrypt.compareSync(req.body.password, foundUser.password)
    if(matchPassword){
        if(foundUser.isConfirmed == false){
            return res.status(401).json({message: "Please Verify Your Email"})
        }
        let token = jwt.sign({_id: foundUser._id, role: foundUser.role, email: foundUser.email}, "test")
       return res.json({message: "Welcome", data: foundUser, token: token})
    }
        res.status(422).json({message: "Invalid Password or Email"})
}



let verifyAccount = async (req,res) => {
    let verifyEmail = req.params.token
    jwt.verify(verifyEmail, "emailtoken", async(err, decoded) => {
        if(err){
            return res.status(401).json({message: "Invalid Token"})
        }
        await userModel.findOneAndUpdate({ email: decoded.email }, {isConfirmed: true})
        res.status(200).json({message: "Account Verified"})
    })
}




export {signup, signin, verifyAccount}
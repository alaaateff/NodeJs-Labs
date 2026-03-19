
import userModel from "../../Database/Models/user.Model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendEmail } from "../../Email/email.js";
import catchError from "../../Middleware/catchError.js";

let listUsers = catchError (async (req, res) => {
    let users = await userModel.find();
    res.json({message: "List Of Users", data: users});
}
)

let signup = catchError(async (req, res) => {
     let addUser = await userModel.insertMany(req.body); 
     sendEmail(req.body.email)
    addUser[0].password = undefined
    res.json({message: "User Added", data: addUser})
}
)

let signin = catchError(async (req, res) => {

    let foundUser = req.foundUser
    let matchPassword = bcrypt.compareSync(req.body.password, foundUser.password)
    if(matchPassword){
        if(foundUser.isConfirmed==false){
            return res.status(400).json({message: "Please Verify Your Email"})
        }
        let token = jwt.sign({_id: foundUser._id, role: foundUser.role, email: foundUser.email}, "alaa")
       return res.json({message: "Welcome", data: foundUser, token: token})
    }

        res.status(422).json({message: "Invalid Password or Email"})
   

}
)

let verifyEmail = catchError((req,res) => {
    let verifyEmail = req.params.email 
    jwt.verify(verifyEmail, "emailtoken", async(err, decoded) => {
        if(err){
            return res.status(401).json({message: "Invalid Token"})
        }
        console.log(decoded);
        await userModel.findOneAndUpdate({email: decoded}, {isConfirmed: true})
        res.status(200).json({message: "Account Verified"})
    })
}
)
export {listUsers, signup, signin, verifyEmail}
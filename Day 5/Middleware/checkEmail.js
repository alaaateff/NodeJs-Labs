
import userModel from "../Database/Models/user.Model.js";

const checkEmail = async(req,res,next)=>{

    let foundUser = await userModel.findOne({email:req.body.email })

    if(req.url=="/signup"){
        if(foundUser){
            return res.status(400).json({message:"user already exists"})
        }
        next();
    }else {
            if(foundUser){
                req.foundUser = foundUser ;
                next();

            }else{
                return res.status(422).json({message:"invalid password or email"})
            }
        }
    }

export default checkEmail 
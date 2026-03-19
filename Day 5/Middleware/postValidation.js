import postValidation from "../Validation/PostValidation.js";

 const validationPost = (req,res,next)=>{
    const validationresult = postValidation.validate(req.body)
    if(validationresult.error){
        return res.status(422).json({message: validationresult.error.details[0].message})
    }   
    next();

}
export default validationPost

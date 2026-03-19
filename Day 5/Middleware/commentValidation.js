import commentValidation from "../Validation/CommentValidation.js";

const validationComment = (req,res,next) => {        
    const validationResult = commentValidation.validate(req.body)
    if(validationResult.error){
        return res.status(422).json({message: validationResult.error.details[0].message})
    }
    next();
}
export default validationComment
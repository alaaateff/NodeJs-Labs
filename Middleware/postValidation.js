import postSchema from "../Validation/postValidation.js"


 const validationMiddlewarepost =  (req,res,next) => {
    const validation = postSchema.validate(req.body);
    if(validation.error){
        return res.status(422).json({message: validation.error.details[0].message})
    }
    next();

}
export default validationMiddlewarepost
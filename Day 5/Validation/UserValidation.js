import Joi from "joi" ;

const userValidation = Joi.object({
    name: Joi.string().min(5).max(20).required().messages({
        "string.min": "Name must be at least 5 characters",
        "string.max": "Name must be at most 20 characters",
        "string:empty": "Name is required"
    }) ,
    email: Joi.string().email().required().messages({
        "string.empty": "Email is required"
    }) ,
    password: Joi.string().required().pattern(new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$')).messages({
        "string.empty": "Password is required"  ,
        "string.pattern.base": "Password must be 8-16 characters and include at least one uppercase letter, one lowercase letter, and one number"
    }) ,
    age: Joi.number().min(18).max(40).messages({
        "number.min": "Age must be at least 18",    
        "number.max": "Age must be at most 40" ,
    })

})
export default userValidation
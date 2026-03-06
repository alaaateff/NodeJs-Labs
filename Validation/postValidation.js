import Joi from "joi"

const postSchema = Joi.object({
    title : Joi.string().min(5).required().messages({
        "string.min": "Title must be at least 5 characters",
        "string.empty":"Title can't be empty"
    }),
    content: Joi.string().min(10).required().messages({
        "string.min": "Content must be at least 10 characters",
        "string.empty":"Content can't be empty"
    })

})

export default postSchema
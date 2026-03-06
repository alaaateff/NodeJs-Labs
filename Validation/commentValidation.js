import Joi from "joi"

const commentSchema = Joi.object({
    content: Joi.string().min(5).required().messages({
        "string.min": "Content must be at least 5 characters",
        "string.empty":"Content can't be empty"
    })
})

export default commentSchema
import Joi from "joi" ;

const commentValidation = Joi.object({
  content: Joi.string().min(1).max(100).required().messages({
    "string.empty": "Content is required",
    "string.min": "Content can't be empty",
    "string.max": "Content must not exceed 100 characters",
  })
});

export default commentValidation;
import Joi from "joi";

const postValidation = Joi.object({
    title: Joi.string().min(5).max(50).required().messages({
        "string.empty": "Title is required",
        "string.min": "Title must be at least 5 characters",
        "string.max": "Title must be at most 50 characters"
    }),

    content: Joi.string().min(1).max(100).required().messages({
        "string.empty": "Content is required",
        "string.min": "Content must be at least 1 characters",
        "string.max": "Content must be at most 100 characters"
    })
});

export default postValidation;
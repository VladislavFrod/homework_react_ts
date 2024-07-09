import Joi from "joi";

const loginValidator=Joi.object({
    userId:Joi.number()
        .min(1)
        .max(100)
        .required()
        .messages({
            "number.min": "Мінімум символів 4",
            "number.max": "Максимум символів 10",
        }),
    title: Joi.string()
    .min(4)
    .max(10)
        .required()
        .messages({
            "string.min": "Мінімум символів 4",
            "sting.max": "Максимум символів 10",
        }),
    body: Joi.string()
        .min(4)
        .max(25)
        .required()
        .messages({
            "string.min": "Мінімум символів 4",
            "string.max" : "Максимум символів 25"
        })

})




export default loginValidator;
import Joi from "joi";

const loginValidator=Joi.object({
    username:Joi.string()
        .min(4)
        .max(10)
        .required()
        .messages({
            "string.min": "Мінімум символів 4",
            "sting.max": "Максимум символів 10",
            "any.required": "username Обовязковий"
        }),
    password: Joi.string()
    .min(4)
    .max(10)
        .required()
        .messages({
            "string.min": "Мінімум символів 4",
            "sting.max": "Максимум символів 10",
            "any.required": "Пароль обовязковий"
        }),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            "string.email": "Невірний формат email",
            "any.required": "Email є обов'язковим"
        })

})




export default loginValidator;
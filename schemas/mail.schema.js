const Joi = require("joi");

const name = Joi.string().min(3).max(30);
const email = Joi.string().email();
const message = Joi.string().min(10);

const sendMailSchema = Joi.object({
    name: name.required(),
    email: email.required(),
    message: message.required(),
})

module.exports = sendMailSchema;
const Joi = require("joi");

const addShema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "missing required name field" }),
  phone: Joi.string()
    .required()
    .messages({ "any.required": "missing required phone field" }),
  email: Joi.string()
    .required()
    .messages({ "any.required": "missing required email field" }),
});

module.exports = {
  addShema,
};

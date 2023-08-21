const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../helpers/handleMongooseError");

const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

ContactSchema.post("save", handleMongooseError);

const emptyBody = Joi.object()
  .min(1)
  .messages({ "object.min": "Missing fields" });

const emptyBodyFavorite = Joi.object()
  .min(1)
  .messages({ "object.min": "Missing field favorite" });

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
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({ favorite: Joi.boolean().required() });

const schemas = {
  addShema,
  emptyBody,
  emptyBodyFavorite,
  updateFavoriteSchema,
};

const Contact = model("contact", ContactSchema);

module.exports = {
  Contact,
  schemas,
};

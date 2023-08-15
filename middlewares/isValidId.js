const { isValidObjectId } = require("mongoose");
const { HtrpError } = require("../helpers/HttpError");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    next(HtrpError(400, `${contactId} is not valid id`));
  }
  next();
};

module.exports = isValidId;

const { User } = require("../models/users");

const { HttpError } = require("../helpers/HttpError");
const { ctrlWrapper } = require("../helpers/ctrlWrapper");

const register = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email already in use");
  }
  const newUser = await User.create(req.body);

  res.status(201).json({
    email: newUser.email,
    name: newUser.name,
  });
};

module.exports = {
  register: ctrlWrapper(register),
};

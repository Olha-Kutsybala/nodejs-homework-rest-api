const contacts = require("../models/contacts");

// const { HttpError, ctrlWrapper } = require("../helpers/index");
const { HttpError } = require("../helpers/HttpError");
const { ctrlWrapper } = require("../helpers/ctrlWrapper");

const getAll = async (req, res, next) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  return res.json(result);
};

const add = async (req, res) => {
  const body = req.body;
  const result = await contacts.addContact(body);
  if (!result) {
    throw HttpError();
  }
  return res.status(201).json({ result });
};

const deleteById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Contact deleted" });
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const body = req.body;
  const result = await contacts.updateContact(contactId, body);
  if (!body) {
    throw HttpError(400, "missing fields");
  }
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
};

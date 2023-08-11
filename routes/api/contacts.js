const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(schemas.addShema), ctrl.add);

router.delete("/:contactId", ctrl.deleteById);

router.put("/:contactId", validateBody(schemas.addShema), ctrl.updateById);

module.exports = router;

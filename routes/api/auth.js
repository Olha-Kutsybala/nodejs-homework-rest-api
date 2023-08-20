const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/auth");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/users");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

module.exports = router;

const { Router } = require("express");
const router = Router();

const { register, login, account } = require("../controllers/user.controller");

const { registerValidation, loginValidation } = require("../validations/auth");
const { handleValidationErrors } = require("../validations/errors");

const protectAuth = require("../midileware/protectAuth");

router.post("/register", registerValidation, handleValidationErrors, register);
router.post("/login", loginValidation, handleValidationErrors, login);
router.get("/account", protectAuth, account);

module.exports = router;

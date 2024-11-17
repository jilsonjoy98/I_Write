const { body } = require("express-validator");

exports.registerValidation = [
  body("username", "username is too short").isLength({ min: 3 }),
  body("email", "Not a valid email").isEmail(),
  body("password", "Password is too short, At least five characters").isLength({
    min: 5,
  }),
];
exports.loginValidation = [
  body("email", "Not a valid email").isEmail(),
  body("password", "Password is too short, At least five characters").isLength({
    min: 5,
  }),
];

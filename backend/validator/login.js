const { body } = require("express-validator/check");
const { messages } = require("../common/messages")
const LoginValidator = [
  body("email").not().isEmpty().withMessage(messages.email).isEmail().withMessage(messages.emailregex),
  body("password").not().isEmpty().withMessage(messages.password),

];
module.exports =
  LoginValidator
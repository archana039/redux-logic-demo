const { body } = require("express-validator/check");
const { messages } = require("../common/messages")
console.log(body, 'body')
const ForgotPasswordValidator = [
  body("email").not().isEmpty().withMessage(messages.email).isEmail().withMessage(messages.emailregex),

];
module.exports =
  ForgotPasswordValidator
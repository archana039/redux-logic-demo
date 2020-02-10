const { body, check } = require("express-validator/check");
const { messages } = require("../common/messages")
const SignUpValidator = [
  body("firstName").not().isEmpty().withMessage(messages.firstName),
  body("lastName").not().isEmpty().withMessage(messages.lastName),
  body("email").not().isEmpty().withMessage(messages.email).isEmail().withMessage(messages.emailregex),
  body("password").not().isEmpty().withMessage(messages.password),
  check('confirmPassword').not().isEmpty().withMessage('messages.confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password and confirm password did not match.");
    } else {
      return value;
    }
  })

];
module.exports =
  SignUpValidator 
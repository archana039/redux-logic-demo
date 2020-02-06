const { body, check } = require("express-validator/check");
const { messages } = require("../common/messages")
console.log(body, 'body')
const ResetPasswordValidator = [
  body("newPassword").not().isEmpty().withMessage(messages.newPassword),
  check('confirmPassword').not().isEmpty().withMessage('messages.confirmPassword').trim().isLength({ min: 6 }).custom((value, { req }) => {
    if (value !== req.body.newPassword) {
      throw new Error("Password and confirm password did not match.");
    } else {
      return value;
    }
  })

];
module.exports =
  ResetPasswordValidator
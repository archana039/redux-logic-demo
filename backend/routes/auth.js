var express = require('express')

const { auth: { SignUp, Login, ChangePassword, ForgotPassword, ResetPassword, LinkVerfied } } = require('../controller')

const SignUpValidator = require('../validator/signup')
const ChangePasswordValidator = require('../validator/changepassword')
const ForgotPasswordValidator = require('../validator/forgotpassword')
const ResetPasswordValidator = require('../validator/resetPassword')
const AuthRouter = express.Router();

const LoginValidator = require('../validator/login')
AuthRouter.post('/signup', SignUpValidator, SignUp);
AuthRouter.post('/login', LoginValidator, Login)
AuthRouter.post('/changepassword', ChangePasswordValidator, ChangePassword)
AuthRouter.post('/forgotpassword', ForgotPasswordValidator, ForgotPassword)
AuthRouter.post('/resetpassword', ResetPasswordValidator, ResetPassword)
AuthRouter.get('/linkverification', LinkVerfied)


module.exports = {
  AuthRouter,
  UserRouter
};
const path = require("path");
const User = require('../models/user');
const { validationResult } = require("express-validator/check");
const ValidationFormatter = require('../helper/validationFormatter')
const { comparePassword, generateSalt, encryptPassword, JWTSecrete, decrypt, encrypt } = require('../common/password')
const jwt = require("jsonwebtoken");
const { Email, AvailiableTemplates } = require('../common/email')
const moment = require("moment")
//user signup
const SignUp = async (req, res) => {
  const errors = validationResult(req)
  console.log(errors, 'errors')
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: ValidationFormatter(errors.mapped()),
      success: false
    })
  }
  try {
    const { body: { firstName, lastName, email, password } } = req
    const resp = await User.findOne({ email })
    if (resp && resp.email === email) {
      return res.status(400).json({
        code: 400,
        message: 'This email address alerady exist',
        success: false
      })
    }
    else {
      const salt = generateSalt();
      console.log(salt, 'salt')
      const hashPassword = encryptPassword(password, salt);
      console.log(hashPassword, 'hashPassword')
      const result = await User.create({ firstName, lastName, email, password: hashPassword, isActive: true, })
      console.log(result)
      if (result) {
        return res.status(200).json({
          code: 200,
          message: 'Registration successfully',
          success: true
        })
      }
    }


  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'Unexpected error occured',
      success: false
    })
  }
}

//User Login
const Login = async (req, res) => {
  const errors = validationResult(req)
  // console.log(errors, 'errors')
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: ValidationFormatter(errors.mapped()),
      success: false
    })
  }
  try {
    const { body: { email, password } } = req
    const result = await User.findOne({ email })
    console.log(result, 'resultdd')
    if (!result) {
      return res.status(400).json({
        code: 400,
        message: 'Email address is not found',
        success: false
      })
    }
    if (!comparePassword(password, result.password)) {
      console.log(comparePassword, 'Password did not match')
      return res.status(400).json({
        code: 400,
        message: 'Password did not match',
        success: false
      })
    }
    const token = jwt.sign(
      {
        id: result.id,
        randomKey: generateSalt(8),
        email: email,
        firstName: result.firstName,
        lastName: result.lastName,
      },
      JWTSecrete,
      {
        expiresIn: 604800,
      },
    );
    return res.status(200).json({
      responseCode: 200,
      message: 'Logged in Successfully',
      data: result,
      token: token,
      sessionExpire: 604800,
      success: true
    });
  } catch (error) {
    console.log(error)
  }
}

//ChangePassword
const ChangePassword = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: ValidationFormatter(errors.mapped()),
      success: false
    })
  }
  try {
    const { body: { oldPassword, newPassword, confirmPassword, } } = req
    const token = req.headers.authorization
    const tokenData = jwt.verify(token, JWTSecrete)
    let id = tokenData.id
    const users = await User.findOne({ _id: id })
    if (users === null) {
      return res.status(400).json({
        message: "User not found",
        status: false

      })
    }
    //compare Password
    if (!comparePassword(oldPassword, users.password)) {
      return res.status(400).json({
        message: "Password did not match",
        status: false
      })
    }
    else {
      const salt = generateSalt();
      //encrypt password
      let Password = encryptPassword(newPassword, salt)
      if (token) {
        const result = await User.update({
          _id: users.id
        },
          {
            $set: {
              password: Password,
              salt: salt
            }
          })
        return res.status(200).json({
          message: "Password Updated successfully",
          status: true
        })
      }
    }
  } catch (error) {

  }
}

//ForgotPassword
const ForgotPassword = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: ValidationFormatter(errors.mapped()),
      success: false
    })
  }
  try {
    const { body: { email } } = req
    // const token = req.headers.authorization
    //   const tokenData = jwt.verify(token, JWTSecrete)
    //   let id = tokenData.id
    const data = await User.findOne({ email })
    if (data === null) {
      return res.status(400).json({
        message: "User Not found",
        status: false
      })
    }
    let emailId = data.email
    let id = data._id
    data.email = encrypt(data.email)
    data._id = encrypt(data._id)
    let verifyToken = encrypt(data.email + data._id)
    const currentDate = new Date((new Date(moment().add(30, "minutes"))));
    console.log(emailId)
    console.log(id)
    const updateToken = await User.update(
      {
        email: emailId,
        _id: id
      },
      {
        verifyToken: verifyToken,
        expireToken: currentDate,
      }
    )
    console.log(updateToken)
    const emailAdd = new Email(req);
    await emailAdd.setTemplate(AvailiableTemplates.FORGOTPASSWORD, {
      firstName: data.firstName,
      email: data.email,
      _id: data.id,
      verifyToken: verifyToken
    });
    await emailAdd.SendEmail(email);
    return res.status(200).json({
      message: "Reset password link has been sent to your email address.",
      success: true,
      data: updateToken
    })
  } catch (error) {

    return res.status(500).json({
      message: "Unexpected error occured",
      status: false
    })
  }
}

// ************ For Link Verfication ***********

const LinkVerfied = async (req, res) => {

  try {
    const { query } = req
    const email = decrypt(query.email);
    const id = query.id
    // id = decrypt(query.id);
    console.log(id, 'idddddddd')
    console.log(email)
    const result = await User.findOne({
      email: email,
      _id: id,
      verifyToken: query.token
    })
    console.log(result, 'result')
    if (result === null) {
      return res.status(400).json({
        message: "Your verification link has been expired.",
        status: false
      })
    }
    else {
      return res.status(200).json({
        message: 'Link verified successfully!',
        data: result,
        success: true,
      })
    }
  } catch (error) {
    console.log(error)
  }
}

// **************** Reset Password *****************
const ResetPassword = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: ValidationFormatter(errors.mapped()),
      success: false
    })
  }
  try {
    const { body: { email, id, token, newPassword, conformPassword } } = req
    const salt = generateSalt();
    let Password = encryptPassword(newPassword, salt)
    const result = await User.update(
      {
        _id: id,
        email: email,
        // verifyToken: token
      },
      {
        $set: {
          password: Password,
          salt: salt
        }
      }
    )
    if (result) {
      return res.status(200).json({
        message: "Password Updated Successfully",
        status: true
      })
    }
  } catch (error) {
    return res.status(500).json({
      message: "Unexpexcted error occured",
      status: false
    })
  }
}
module.exports = {
  SignUp,
  Login,
  ChangePassword,
  ForgotPassword,
  ResetPassword,
  LinkVerfied
}
const User = require('../models/user');
const moment = require("moment")
const { validationResult } = require("express-validator/check");
const ValidationFormatter = require('../helper/validationFormatter')

const UserList = async (req, res) => {
  try {
    const { query: { skip, limit } } = req
    let condition = {
      isDelete: false,
    }
    let sortCondition = {
      createdAt: -1
    }
    const result = await User.find(condition).skip(parseInt(skip)).limit(parseInt(limit))
    console.log(result, 'result')
    if (result) {
      return res.status(200).json({
        messsage: "Users List get successfully",
        status: true,
        data: result
      })
    }
  } catch (error) {
    return res.status(500).json({
      messsage: "Unexpected error occured",
      status: false
    })
  }
}

//Edit userList api

const EditUserList = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: ValidationFormatter(errors.mapped()),
      success: false
    })
  }
  try {
    const { body: { firstName, lastName, email, _id } } = req
    let data = {
      firstName,
      lastName,
      email,
      UpdatedAt: Date.now()
    }
    console.log(_id)
    const result = await User.update(
      {
        _id: _id
      },
      {
        $set: data
      }
    )
    console.log(result, 'result')
    if (result) {
      return res.status(200).json({
        message: "User detail updated successfully",
        staus: true,
        data: result
      })
    }
  }
  catch (error) {
    console.log(error)
  }
}

// Delete user api

const DeleteUser = async (req, res) => {
  try {
    const { body: { _id } } = req
    const result = await User.update(
      {
        _id: _id
      },
      {
        $set: {
          isDelete: true
        }
      }
    )
    if (result) {
      return res.status(200).json({
        message: "User deleted successfully",
        status: true
      })
    }

  }
  catch (error) {
    console.log(error)
  }
}

//Users status api 

const UserStatus = async (req, res) => {
  try {
    const { body: { isActive, id } } = req
    const result = await User.update(
      { _id: id },
      {
        $set: {
          isActive
        }
      }
    )
    if (result) {
      return res.status(200).json({
        message: "Status Updated successfully",
        status: true,
        data: result
      })
    }
  }
  catch (error) {
    return res.status(500).json({
      message: "Unexpected error occured",
      status: false
    })
  }
}
module.exports = {
  UserList,
  EditUserList,
  DeleteUser,
  UserStatus
}
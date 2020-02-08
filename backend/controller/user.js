const User = require('../models/user');

const UserList = async (req, res) => {
  try {
    let condition = {
      isDelete: false,
    }
    let sortCondition = {
      createdAt: -1
    }
    const result = await User.find()
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
module.exports = {
  UserList
}
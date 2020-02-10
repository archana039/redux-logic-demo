var express = require('express')
const { users: { UserList, EditUserList, DeleteUser, UserStatus } } = require('../controller')

const UserRouter = express.Router()

UserRouter.get('/getusersList', UserList)
UserRouter.post('/edituser', EditUserList)
UserRouter.post('/deleteUser', DeleteUser)
UserRouter.put('/userStatus/:id', DeleteUser)
module.exports =
  UserRouter

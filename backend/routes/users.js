var express = require('express')
const { users: { UserList } } = require('../controller')
console.log(UserList, 'UserList')

const UserRouter = express.Router()

UserRouter.get('/getusersList', UserList)
module.exports =
  UserRouter

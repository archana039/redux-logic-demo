var express = require('express')
const { uses: { UserList } } = require('../controller')
const UserRouter = express.Router()
UserRouter.get('/usersList', UserList)
module.exports = {
  UserRouter
};
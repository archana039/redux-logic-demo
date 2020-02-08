const express = require('express')
const router = express.Router();
const AuthRouter = require('./auth');
const UserRouter = require('./users')
router.use("/auth", AuthRouter);
router.use('/users', UserRouter)
module.exports = router
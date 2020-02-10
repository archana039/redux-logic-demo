var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const User = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  profileImage: {

  },
  password: {
    type: String,
  },
  confirmPassword: {
    type: String
  },

  isActive: {
    type: Boolean
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isDelete: {
    type: Boolean,
    default: false
  },
  verifyToken: {
    type: String,
  },
  expireToken: {
    type: Date,
  }
});

module.exports = mongoose.model('user', User);
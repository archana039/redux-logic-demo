const bcrypt = require('bcrypt')
const crypto = require('crypto');
const { Hash, Decipher, Cipher } = require('crypto');
/**
 * Generate Password
 */
const generatePassword = (length = 8) => {
  var text = '';
  var possible =
    'abcdefghijkmnopqrstuvwxyz!@#$%^&*()ABCDEFGHJKLMNOPQRSTUVWXYZ023456789';
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

/**
 * Encrypt the password using bcrypt algo
 */
const encryptPassword = (password, salt) => {
  return bcrypt.hashSync(password, salt);
};

/**
 * Compare the password using bcrypt algo
 */
const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};
/**
 * Generates Salt for the password
 */
const generateSalt = (length = 10) => {
  return bcrypt.genSaltSync(length);
};
/**
 * JWT Secret
 */
/**
 * Encrypt Email and Id
 */
var algorithm = 'aes-256-cbc';
var password = 'password';
const encrypt = (text) => {
  const cipher = crypto.createCipher(algorithm, password);
  var crypted = cipher.update(text.toString(), 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

// Dycript Email and Id
const decrypt = (text) => {
  const decipher = crypto.createDecipher(algorithm, password);
  var dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
};

const JWTSecrete = 'qwertyuiop[]lkjhgfdazxcvbnm,./!@#$%^&*()';
module.exports = {
  encryptPassword,
  comparePassword,
  generateSalt,
  JWTSecrete,
  generatePassword,
  decrypt,
  encrypt
};

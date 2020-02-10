var multer = require('multer')
var path = require('path');
console.log("storageee")
var storageFrontFile = multer.diskStorage({
  destination: function (req, file, callback) {
    console.log(file, 'fiee')
    callback(null, path.join(__dirname, "..", "assets", "image"));
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  }
});
module.exports = {
  storageFrontFile
}
const getIpAddress = req => {
  var ip = null;
  try {
    ip =
      (req.headers["x-forwarded-for"] || "").split(",").pop() ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;
  } catch (ex) {
    ip = null;
  }
  return ip;
};
const secret = "qwertyuiop[]lkjhgfdazxcvbnm,./!@#$%^&*()"
//Form Validation

module.exports = {
  getIpAddress,
  secret,
}
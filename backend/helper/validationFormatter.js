const ValidationFormatter = (err, isString = false, delimeter = "<br>") => {
  if (typeof err !== "object") {
    return err;
  }
  var e = [];
  for (let i in err) {
    e.push(err[i].msg);
  }
  if (isString === false) {
    return e;
  }
  return e.join(delimeter);
};

module.exports = ValidationFormatter
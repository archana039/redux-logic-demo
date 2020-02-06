const nodemailer = require("nodemailer");
const fs = require('fs')
const path = require('path')
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "test.chapter247@gmail.com",
    pass: "chapter247@@"
  }
})
const AvailiableTemplates = {
  FORGOTPASSWORD: "forgotpassword"
}
class Email {
  constructor(req) {
    this.body = ""
    this.subject = ""
    this.to = []
    this.cc = ""
    const host = req && req.headers && req.headers.referer ? req.headers.referer.split("/") : [];
    this.host = [host[0] || "", host[1] || "", host[2] || ""].join("/");
    this.webURL = "";
    this.adminURL = ""
  }
  async setTemplate(templateName, replaceObject = {}) {
    if (!templateName) {
      throw new Error("Please provide template name", 400);
    }
    switch (templateName) {
      case AvailiableTemplates.FORGOTPASSWORD:
        this.subject = "Reset Password";
        break;
      default:
        throw new Error("Invalid Template Name", 400)
    }
    let content = fs.readFileSync(
      path.join(__dirname, `./../emailTemplate/${templateName}.html`),
      "utf8"

    )
    replaceObject = {
      ...replaceObject,
      webURL: this.webURL,
      adminURL: this.adminURL
    }
    console.log(content, 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')
    console.log(replaceObject, 'lllllllllllllllllllllllllllllllllllllllllll')
    for (const key in replaceObject) {
      if (replaceObject.hasOwnProperty(key)) {
        const val = replaceObject[key];
        content = content.replace(new RegExp(`{${key}}`, "g"), val)
      }
    }
    this.body = content
    return content
  }
  setSubject(subject) {
    this.subject = subject
  }
  setBody(body) {
    this.body = body
  }
  serCC(cc) {
    this.cc = cc
  }

  async SendEmail(email) {
    if (!email) {
      throw new Error("Please Provide Email")
    }
    const mailOption = {
      from: "Demo <archana.chapter247@gmail.com>",
      to: email,
      cc: this.cc,
      subject: this.subject,
      html: this.body
    }
    let resp = transporter.sendMail(mailOption);
    console.log(resp, 'resp')
    return resp;
  }
}
module.exports = {
  Email,
  AvailiableTemplates
};
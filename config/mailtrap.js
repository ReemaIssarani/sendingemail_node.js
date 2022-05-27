const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b4c314c75e7643",
      pass: "25b8181c6bb0df"
    }
  });

module.exports = transporter  
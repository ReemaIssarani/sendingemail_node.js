const nodemailer = require('nodemailer');
function sendEmail(){
let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b4c314c75e7643",
      pass: "25b8181c6bb0df"
    }
  });

message = {
    from:"fromnow@email.com",  // sender email id
    to:"sunilkumar.a@caratlane.com",      // recepient email id
    subject:"Testing email",
    text:"Hello SMTP Email"
}

// message = {
//     from:"from@email.com",
//     to:"to@email.com",
//     subject:"Testing HTML body",
//     html:"<h2>Hello SMTP Email<h2>"
// }

transporter.sendMail(message,function(err,info){
    if(err){
        console.log(err)
    }
    else{
        console.log(info)
    }
})
}
module.exports = {
    sendMail: sendEmail() 
}

/* import 'email' '../email.js';
email.sendMail() */ 
const transporter = require('../config/mailtrap')

module.exports = {
    sendEmail: (req,res) => {
        const body = req.body;
       
        transporter.sendMail(body,function(err,info){
            if(err){
                console.log(err)
                return res.status(500).json({
                    message: err
                })
            }
            else{
                console.log(info)
                return res.status(200).json({
                    data: info
                })
            }
        })
    }
}
   
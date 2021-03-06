// Dependencies
const nodemailer = require('nodemailer');

// Methods for Email Controller
module.exports = {
    sendEmail: function(req, res){
        const newEmail = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        };
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "danielsportfolio192@gmail.com",
                pass: "DansPortfolio153"
            }
        }); 
        const mailOptions = {
            from: "danielsportfolio192@gmail.com",
            to: "dthweatt192@gmail.com",
            subject: "New Message Via Portfolio",
            text: "Name of Sender: " + newEmail.name + "\nEmail Address: " + newEmail.email + "\nMessage: " + newEmail.message
        };
        transporter.sendMail(mailOptions, function(err, info){
            if (err) {
                console.log(err);
                res.status(500).send("Unable to send message.");
            } else {
                console.log("Email sent: " + info.response);
                res.status(200).send(newEmail);
            }
        });
    }
};
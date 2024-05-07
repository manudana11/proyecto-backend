const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: true,
    auth: {
        user,
        pass,
    },
});

module.exports = {transporter};
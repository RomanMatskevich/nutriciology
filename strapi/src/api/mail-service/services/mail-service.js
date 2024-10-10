'use strict';

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.MAIL_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});


module.exports = () => ({
    sendEmail: async (emitters, html) => {
        const info = await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: emitters,
            html: html,
        })
        console.log(info)
        return info;
    }
});

// config/mailer.config.js

const nodemailer = require("nodemailer");
const SMTP_URI =
	"smtps://apikey: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@smtp.sendgrid.net:465/?pool=true";
const transporter = nodemailer.createTransport(SMTP_URI);

// verify connection configuration
transporter
	.verify()
	.then((success) => console.log("mailer ready", success))
	.catch((err) => console.error("oops mailer", err));

module.exports = transporter;

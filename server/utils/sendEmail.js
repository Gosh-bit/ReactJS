const nodemailer = require('nodemailer');

const EMAIL_SERVICE = 'SendGrid';
const EMAIL_USERNAME = 'apikey';
const EMAIL_PASSWORD = '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';
const EMAIL_FROM = 'g.q.stratiev@gmail.com';

const sendEmail = (options) => {
	const transporter = nodemailer.createTransport({
		service: process.env.EMAIL_SERVICE,
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	const mailOptions = {
		from: process.env.EMAIL_FROM,
		to: options.to,
		subject: options.subject,
		html: options.text,
	};

	transporter.sendMail(mailOptions, function (err, info) {
		if (err) {
			console.log(err);
		} else {
			console.log(info);
		}
	});
};

module.exports = sendEmail;

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kishoreprema2001@gmail.com',
        pass: 'wkrh mbwk rmam sqdq'
    }
});

const mailOptions = {
    from: '"NexBoard Test" <kishoreprema2001@gmail.com>',
    to: 'kishoreprema2001@gmail.com',
    subject: '📬 NexBoard Local Mailer Test',
    text: 'If you receive this, your Google App Password and SMTP connection are working perfectly!'
};

console.log('Attempting to send test email...');
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('❌ Error sending mail:', error);
    } else {
        console.log('✅ Email sent successfully! Message ID:', info.messageId);
    }
});

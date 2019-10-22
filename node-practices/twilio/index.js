const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const message = {
  to: ['asharimh97@gmail.com', 'prilivia98@gmail.com'],
  from: 'noreply@iamashari.space',
  subject: 'Test email',
  text: 'It is just a simple email test'
};

sgMail.send(message);

// console.log(process.env.SENDGRID_API_KEY);

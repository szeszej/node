const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "szeszej@gmail.com",
    subject: "Welcome to the app!",
    text: `Thanks for choosing our task management app, ${name}!`,
  });
};

const sendByeByeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "szeszej@gmail.com",
    subject: "Sorry to see you go :(",
    text: `Why did you do it to us, ${name}?`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendByeByeEmail,
};

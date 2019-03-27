// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');

exports.handler = function(event, context, callback) {
  const data = JSON.parse(event.body);
  const email = data.email;
  const name = data.name;
  const message = data.message;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'sean@verygoodsoftwarecompany.io',
    from: 'sean@verygoodsoftwarecompany.io',
    subject: `Message from ${name}`,
    text: message,
  };

  sgMail.send(msg).then((response, body) => {
    callback(null, { statusCode: response.statusCode, body: '' });
  }).catch(err => {
    callback(err, null)
  });
}

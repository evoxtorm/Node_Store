const nodemailer = require('nodemailer');
const pug = require('pug');
const juice = require('juice');
const htmlToText = require('html-to-text');
const promisify = require('es6-promisify');


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8104383a318448",
    pass: "595b802376ca75"
  }
});


const generateHTML = (filename, options = {}) => {
  const html = pug.renderFile(`${__dirname}/../views/email/${filename}.pug`, options);
  // console.log(html);
  // return html;
  const inlined = juice(html);
  return inlined;
};

exports.send = async (options) => {
  const html = generateHTML(options.filename, options);
  const text = htmlToText.fromString(html);

  const mailOptions = {
    from: `Hitesh Joshi <evostorm96@gmail.com>`,
    to: options.user.email,
    subject: options.subject,
    html,
    text
  };
  const sendMail = promisify(transport.sendMail, transport);
  return sendMail(mailOptions);
};

// transport.sendMail({
//   from: 'Hitesh Joshi <evostorm96@gmail.com>',
//   to: 'randy@example.com',
//   subject: 'Just trying things',
//   html: 'Hey is it there!!!',
//   text: 'Hey It is working'
// });
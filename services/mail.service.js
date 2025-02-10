const nodemailer = require("nodemailer");
const { config } = require("./../config/config");

class MailService {
  async sendMail(name, email, message) {
    const mail = {
      from: config.smtpEmail,
      to: config.recieverEmail,
      subject: `${name} en BenjaSaldao.com!`,
      html: `Nombre: ${name} <br/> Email: ${email} <br/> Mensaje: <br/> ${message}`,
    };
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      port: 465,
      auth: {
        user: config.smtpEmail,
        pass: config.smtpPassword,
      },
    });
    const rta = await transporter.sendMail(mail);
    return rta;
  }
}

module.exports = MailService;

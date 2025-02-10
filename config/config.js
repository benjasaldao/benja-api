require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  apiKey: process.env.API_KEY,
  smtpEmail: process.env.SMTP_EMAIL,
  smtpPassword: process.env.SMTP_PASSWORD,
  allowedOrigin: process.env.ALLOWED_ORIGIN,
  recieverEmail: process.env.RECIEVER_EMAIL,
};

module.exports = { config };

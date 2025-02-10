const express = require("express");

const MailService = require("../services/mail.service");
const { checkApiKey } = require("../middlewares/authHandler");
const validationHandler = require("../middlewares/validationHandler");

const sendMailSchema = require("../schemas/mail.schema");

const mailService = new MailService();

function routerApi(app) {
  const router = express.Router();

  router.post(
    "/send",
    checkApiKey,
    validationHandler(sendMailSchema, "body"),
    async (req, res, next) => {
      try {
        const { name, email, message } = req.body;
        const rta = await mailService.sendMail(name, email, message);
        res.json(rta);
      } catch (err) {
        next(err);
      }
    }
  );

  app.use("/", router);
}

module.exports = routerApi;

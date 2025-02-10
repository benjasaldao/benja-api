const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");

const { config } = require("./config/config");

const MailService = require("./services/mail.service");
const mailService = new MailService();

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/errorHandler");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  next();
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("App running, listening on port " + port);
});

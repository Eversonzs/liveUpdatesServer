const express = require('express');
const timeout = require('connect-timeout');
const morganLogger = require('morgan');
const bp = require('body-parser');
const SETTINGS = require('./settings');
const cors = require('cors');
const basicAuth = require('express-basic-auth');
const logger = require('./logger')('server-app');

const app = express();

const { PORT } = SETTINGS;

const { myAuthorizer, getUnauthorizedResponse } = require('./src/controllers/v1/api/basicAuth');

const versionRouter = require('./src/routes/v1/version');

app.use(
    cors({
      allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Methods',
        'Access-Control-Request-Headers',
        'Accept',
      ],
    })
);

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(timeout('3000s'));
app.use(morganLogger('dev'));

app.use('/appVersion', versionRouter);

app.use(basicAuth(
  {
    authorizer: myAuthorizer,
    unauthorizedResponse: getUnauthorizedResponse,
  }
));
  
app.listen(PORT, function () {
  logger.info(`Express server listening on port ${PORT}`);
});

app.use((req, res) => {
  res.status(200).json({ message: `Server is running on port ${PORT}` });
});

module.exports = app;

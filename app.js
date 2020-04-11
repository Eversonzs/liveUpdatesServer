const express = require('express');
const timeout = require('connect-timeout');
const morganLogger = require('morgan');
const bp = require("body-parser");
const SETTINGS = require('./settings');

const app = express();

const { PORT } = SETTINGS;

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(timeout('3000s'));
app.use(morganLogger('dev'));

app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT}`);
});

app.use((req, res) => {
  res.status(200).json({ message: `Server is running on port ${PORT}` });
});

module.exports = app;

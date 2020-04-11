const express = require('express');
const timeout = require('connect-timeout');
const morganLogger = require('morgan');
const bp = require("body-parser");

const app = express();

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(timeout('3000s'));
app.use(morganLogger('dev'));

app.listen(3000, function () {
    console.log('Express server listening on port 3000');
});

app.use((req, res) => {
  res.status(200).json({ message: `Server is running.` });
});

module.exports = app;

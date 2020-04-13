const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  const packageJson = require('../../../package.json');
  res.json({
    appName: packageJson.name,
    version: packageJson.version,
  });
});

module.exports = router;

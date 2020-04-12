const express = require('express');

const {
  userLogin,
} = require('../../../controllers/v1/api/userLogin');

const router = express.Router();
router.get('/', userLogin);

module.exports = router;

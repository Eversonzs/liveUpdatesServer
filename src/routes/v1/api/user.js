const express = require('express');

const {
  userLogin,
} = require('../../../controllers/v1/api/user');

const router = express.Router();
router.get('/login', userLogin);

module.exports = router;

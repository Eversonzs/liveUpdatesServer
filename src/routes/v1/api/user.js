const express = require('express');

const {
  userLogin,
  createUser,
} = require('../../../controllers/v1/api/user');

const router = express.Router();

router.get('/login', userLogin);
router.post('/', createUser);

module.exports = router;

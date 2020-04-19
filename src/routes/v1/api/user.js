const express = require('express');

const {
  userLogin,
  createUser,
  getByUsername,
} = require('../../../controllers/v1/api/user');

const router = express.Router();

router.post('/login', userLogin);
router.post('/', createUser);
router.get('/byUsername/:username', getByUsername);

module.exports = router;

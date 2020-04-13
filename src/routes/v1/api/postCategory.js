const express = require('express');

const {
  createPostCategory,
} = require('../../../controllers/v1/api/postCategory');

const router = express.Router();

router.post('/create', createPostCategory);

module.exports = router;

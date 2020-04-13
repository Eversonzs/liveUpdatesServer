const express = require('express');

const {
  createCategory,
} = require('../../../controllers/v1/api/postCategory');

const router = express.Router();

router.post('/create', createCategory);

module.exports = router;

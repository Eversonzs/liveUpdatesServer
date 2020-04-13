const express = require('express');

const {
  createPost,
} = require('../../../controllers/v1/api/post');

const router = express.Router();

router.post('/', createPost);

module.exports = router;

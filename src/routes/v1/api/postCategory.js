const express = require('express');

const {
  createPostCategory,
  getPostCategories,
} = require('../../../controllers/v1/api/postCategory');

const router = express.Router();

router.post('/', createPostCategory);
router.get('/', getPostCategories);

module.exports = router;

const express = require('express');

const {
  createPost,
  getPostsByCategoryId,
} = require('../../../controllers/v1/api/post');

const router = express.Router();

router.get('/byCategoryId/:postCategoryId', getPostsByCategoryId);
router.post('/', createPost);

module.exports = router;

const express = require('express');

const {
  createPost,
  getPostsByCategoryId,
  getAllPosts,
} = require('../../../controllers/v1/api/post');

const router = express.Router();

router.get('/', getAllPosts);
router.get('/byCategoryId/:postCategoryId', getPostsByCategoryId);
router.post('/', createPost);

module.exports = router;

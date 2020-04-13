const {
    success: { ok, created },
    error: { badRequest },
} = require('../standardResponseCode');

module.exports = {
  errorMissingTitle: {
    message: 'Error, title field is missing',
    code: badRequest.code,
    messageCode: badRequest.messageCode,
  },
  errorMissingDescription: {
    message: 'Error, description field is missing',
    code: badRequest.code,
    messageCode: badRequest.messageCode,
  },
  errorMissingPostCategoryId: {
    message: 'Error, postCategoryId field has to be an id number',
    code: badRequest.code,
    messageCode: badRequest.messageCode,
  },
  errorMissingUserId: {
    message: 'Error, userId field has to be an id number',
    code: badRequest.code,
    messageCode: badRequest.messageCode,
  },
  postCreated: {
    message: 'Post created successfully',
    code: created.code,
    messageCode: created.messageCode,
  },
  postsRetrieved: {
    message: 'Posts retrieved successfully',
    code: ok.code,
    messageCode: ok.messageCode
  },
  notPostsForCategory: {
    message: 'There is not posts for this category',
    code: badRequest.code,
    messageCode: badRequest.messageCode
  },
};

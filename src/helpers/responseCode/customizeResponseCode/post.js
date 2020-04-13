const {
    success: { created },
    error: { badRequest },
} = require('../standardResponseCode');

module.exports = {
  errorMissingTitle: {
    message: 'Error, title field is missing',
    code: badRequest.code,
    messageCode: badRequest.messageCode,
  },
  errorMissingDescription: {
    message: 'Error,description field is missing',
    code: badRequest.code,
    messageCode: badRequest.messageCode,
  },
  errorMissingPostCategoryId: {
    message: 'Error, post category id field is missing',
    code: badRequest.code,
    messageCode: badRequest.messageCode,
  },
  errorMissingUserId: {
    message: 'Error, user id field is missing',
    code: badRequest.code,
    messageCode: badRequest.messageCode,
  },
  postCreated: {
    message: 'Post created successfully',
    code: created.code,
    messageCode: created.messageCode,
  },
};

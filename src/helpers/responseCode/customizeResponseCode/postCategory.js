const {
    success: { ok, created },
    error: { badRequest, notFound },
} = require('../standardResponseCode');

module.exports = {
  errorMissingName: {
    message: 'Error, the name field is missing',
    code: badRequest.code,
    messageCode: badRequest.messageCode,
  },
  postCategoryCreated: {
    message: 'Post category created successfully',
    code: created.code,
    messageCode: created.messageCode,
  },
  postCategoriesNotFound: {
    message: 'Post categories not found',
    code: notFound.code,
    messageCode: notFound.messageCode,
  },
  postCategoriesRetrieved: {
    message: 'Post categories retrieved',
    code: ok.code,
    messageCode: ok.messageCode,
  }
};

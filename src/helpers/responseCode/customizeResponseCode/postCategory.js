const {
    success: { created },
    error: { badRequest },
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
};

const {
    success: { created },
    error: { badRequest },
} = require('../standardResponseCode');

module.exports = {
  errorMissingTitle: {
    message: 'Error, the title field is missing',
    code: badRequest.code,
    messageCode: badRequest.messageCode,
  },
  postCreated: {
    message: 'Post created successfully',
    code: created.code,
    messageCode: created.messageCode,
  },
};

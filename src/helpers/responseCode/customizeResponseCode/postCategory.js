const {
    error: { badRequest },
} = require('../standardResponseCode');

module.exports = {
  errorMissingName: {
    message: 'Error, the name field is missing',
    code: badRequest.code,
    messageCode: badRequest.messageCode,
  },
};

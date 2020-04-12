const {
    success: { ok },
    error: { badRequest, notFound },
} = require('../standardResponseCode');
  
module.exports = {
  errorMissingEmail: {
    message: 'Error, the email field is missing',
    code: badRequest.code,
    messageCode: badRequest.messageCode,
  },
  errorMissingPassword: {
    message: 'Error, password field is missing',
    code: badRequest.code,
    messageCode: badRequest.messageCode,
  },
  userNotFound: {
    message: 'Error, user not found',
    code: notFound.code,
    messageCode: notFound.messageCode,
  },
  userFound: {
    message: 'User found',
    code: ok.code,
    messageCode: ok.messageCode,
  }
};

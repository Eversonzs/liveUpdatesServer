const {
    success: { ok, created },
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
  errorMissingUsername: {
    message: 'Error, username field is missing',
    code: badRequest.code,
    messageCode: badRequest.messageCode,
  },
  errorMissingName: {
    message: 'Error, name field is missing',
    code: badRequest.code,
    messageCode: badRequest.messageCode,
  },
  errorMissingLastName: {
    message: 'Error, lastName field is missing',
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
  },
  userCreated: {
    message: 'User created successfully.',
    code: created.code,
    messageCode: created.messageCode,
  },
};

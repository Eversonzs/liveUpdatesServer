const {
    success: { ok, created },
    error: { badRequest, notFound, unauthorized },
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
  userUnauthorized: {
    message: 'Unauthorized user, The credentials provided does not match',
    code: unauthorized.code,
    messageCode: unauthorized.messageCode,
  },
  userFound: {
    message: 'User found',
    code: ok.code,
    messageCode: ok.messageCode,
  },
  userCreated: {
    message: 'User created successfully',
    code: created.code,
    messageCode: created.messageCode,
  },
  userRetrieved: {
    message: 'User retrieved successfully',
    code: ok.code,
    messageCode: ok.messageCode,
  },
};

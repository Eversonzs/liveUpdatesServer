const basicAuth = require('express-basic-auth');
const SETTINGS = require('../../../../settings');

function myAuthorizer (username, password) {
  const { API_USERNAME, API_PASSWORD } = SETTINGS;
  const userMatches = basicAuth.safeCompare(username, API_USERNAME);
  const passwordMatches = basicAuth.safeCompare(password, API_PASSWORD);
  return userMatches & passwordMatches;
}

function getUnauthorizedResponse (req) {
  return req.auth
    ? ({
      code: 401,
      message: 'Unauthorized User.',
    })
    : {
      code: 401,
      message: 'No credentials provided.',
    };
};

module.exports = { myAuthorizer, getUnauthorizedResponse };
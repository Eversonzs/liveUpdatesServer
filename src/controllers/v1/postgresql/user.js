const logger = require('../../../../logger')('controllers-v1-postgresql-user');
const pool = require('../../../services/postgresql/postgresqlConnection');
const { userNotFound } = require('../../../helpers/responseCode/customizeResponseCode/user');

module.exports = {
  getUserByEmail (email) {
    const queryGetUserLogin = `SELECT username, email, password
      FROM live_updates.user
      WHERE email = $1
    `;
    const userData = [email];
    return pool.query(queryGetUserLogin, userData)
        .then(userResponse => {
          if (userResponse.rowCount === 1) {
            return userResponse.rows[0];
          }
          return { code: userNotFound.code, message: userNotFound.message }; 
        })
        .catch(error =>
          setImmediate(() => {
            const errorMessage = `There was an error: ${error}`;
            logger.error(errorMessage);
            return errorMessage;
          })
        );
  },
};

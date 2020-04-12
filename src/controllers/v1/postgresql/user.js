const logger = require('../../../../logger')('controllers-v1-postgresql-user');
const pool = require('../../../services/postgresql/postgresqlConnection');

module.exports = {
  getUserLogin (email, password) {
    logger.debug('email, password', email, password);
    const queryGetUserLogin = `SELECT username, email, password
      FROM live_updates.user
      WHERE email = $1 and password = $2
    `;
    const userData = [email, password];
    pool.query(queryGetUserLogin, userData)
        .then(userResponse => {
          logger.debug('userResponse-->>', userResponse)
          if (userResponse.rowCount === 1) {
            return true;
          }
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

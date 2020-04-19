const logger = require('../../../../logger')('controllers-v1-postgresql-user');
const pool = require('../../../services/postgresql/postgresqlConnection');
const { userNotFound, userCreated } = require('../../../helpers/responseCode/customizeResponseCode/user');

module.exports = {
  getUserByEmail (email) {
    const queryGetUserLogin = `SELECT user_id, username, email, password, photo
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
        .catch(error => {
            const errorMessage = `There was an error: ${error}`;
            logger.error(errorMessage);
            return { code: 400, message: errorMessage };
        })
  },

  createUser (userData) {
    const {
        username,
        email,
        password,
        name,
        lastName,
        birthday,
        cellphone,
        photo,
    } = userData;

    const createUserQuery = `
      INSERT INTO live_updates.user(user_id, username, email, password, name, lastname, birthday, cellphone, photo)
	    VALUES (nextval('live_updates.user_id'), $1, $2, $3, $4, $5, $6, $7, $8)
    `;
    const userDataParams =  [
        username,
        email,
        password,
        name,
        lastName,
        birthday,
        cellphone,
        photo,
    ];

    return pool.query(createUserQuery, userDataParams)
        .then(userResponse => {
          if (userResponse.rowCount === 1) {
            return { code: userCreated.code, message: userCreated.message };
          }
          return { code: 400, message: 'User not created' };
        })
        .catch(error => {
          let errorMessage = '';
          if (error.detail) {
            errorMessage = error.detail;
          } else {
            errorMessage = `Error: ${error}`;
          }
          logger.error(errorMessage);
          return { code: 400, message: errorMessage };
        });
  },
};

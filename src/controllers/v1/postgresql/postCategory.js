const logger = require('../../../../logger')('controllers-v1-postgresql-postCategory');
const pool = require('../../../services/postgresql/postgresqlConnection');
const { postCategoryCreated } = require('../../../helpers/responseCode/customizeResponseCode/user');

module.exports = {
  createPostCategory (name, description) {
    const createUserQuery = `
      INSERT INTO live_updates.post_category(name, description)
	    VALUES (nextval('live_updates.post_category_id'), $1, $2)
    `;
    const postCategoryData =  [
        name,
        description,
    ];

    return pool.query(createUserQuery, postCategoryData)
        .then(userResponse => {
          if (userResponse.rowCount === 1) {
            return { code: postCategoryCreated.code, message: postCategoryCreated.message };
          }
          return { code: 400, message: 'Post category not created' };
        })
        .catch(error => {
          const errorMessage = `There was an error creating post category: ${error}`;
          logger.error(errorMessage);
          return { code: 400, message: errorMessage };
        });
  },
};

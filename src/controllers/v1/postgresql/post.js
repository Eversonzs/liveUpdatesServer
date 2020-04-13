const logger = require('../../../../logger')('controllers-v1-postgresql-post');
const pool = require('../../../services/postgresql/postgresqlConnection');
const {
    postCreated,
} = require('../../../helpers/responseCode/customizeResponseCode/postCategory');

module.exports = {
  createPost (postData) {
    const createPostQuery = `
      INSERT INTO live_updates.post()
	    VALUES (nextval('live_updates.post_id'))
    `;
    const postDataParams =  [
    ];

    return pool.query(createPostQuery, postDataParams)
        .then(postResponse => {
          if (postResponse.rowCount === 1) {
            return { code: postCreated.code, message: postCreated.message };
          }
          return { code: 400, message: 'Post not created' };
        })
        .catch(error => {
          const errorMessage = `There was an error creating post: ${error}`;
          logger.error(errorMessage);
          return { code: 400, message: errorMessage };
        });
  },
};

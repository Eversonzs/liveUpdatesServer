const logger = require('../../../../logger')('controllers-v1-postgresql-post');
const pool = require('../../../services/postgresql/postgresqlConnection');
const {
    postCreated,
} = require('../../../helpers/responseCode/customizeResponseCode/postCategory');

module.exports = {
  createPost (postData) {
    const {
        postCategoryId,
        userId,
        title,
        description,
        image,
    } = postData;

    const createPostQuery = `
      INSERT INTO live_updates.post(
          post_id,
          post_category_id,
          user_id,
          title,
          description,
          image,
          timestamp
        )
      VALUES (nextval('live_updates.post_id'), $1, $2, $3, $4, $5, now())
    `;
    const postDataParams =  [
        postCategoryId,
        userId,
        title,
        description,
        image,
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

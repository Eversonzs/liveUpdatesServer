const logger = require('../../../../logger')('controllers-v1-postgresql-post');
const pool = require('../../../services/postgresql/postgresqlConnection');
const {
    postCreated,
} = require('../../../helpers/responseCode/customizeResponseCode/post');

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

  getPostsByCategoryId (postCategoryId) {
    const getPostsByCategoryIdQuery = `
      SELECT A.post_id, B.name AS category_name, C.username, A.title, A.description, A.image, A.timestamp
      FROM live_updates.post as A
      INNER JOIN live_updates.post_category as B ON A.post_category_id = B.post_category_id
      INNER JOIN live_updates.user AS C ON A.user_id = C.user_id
      WHERE A.post_category_id = $1
    `;

    return pool.query(getPostsByCategoryIdQuery, [postCategoryId])
        .then(postResponse => {
          if (postResponse.rowCount !== 0) {
            return {
                code: postCreated.code,
                message: postCreated.message,
                posts: postResponse.rows,
            };
          }
          return { code: 400, message: 'Post not retrieved' };
        })
        .catch(error => {
          const errorMessage = `There was an error creating post: ${error}`;
          logger.error(errorMessage);
          return { code: 400, message: errorMessage };
        });
  },
};

const logger = require('../../../../logger')('controllers-v1-postgresql-postCategory');
const pool = require('../../../services/postgresql/postgresqlConnection');
const {
    postCategoryCreated,
    postCategoriesRetrieved,
} = require('../../../helpers/responseCode/customizeResponseCode/postCategory');

module.exports = {
  createPostCategory (name, description) {
    const createUserQuery = `
      INSERT INTO live_updates.post_category(post_category_id, name, description)
	    VALUES (nextval('live_updates.post_category_id'), $1, $2)
    `;
    const postCategoryData =  [
        name,
        description,
    ];

    return pool.query(createUserQuery, postCategoryData)
        .then(postCategoryResponse => {
          if (postCategoryResponse.rowCount === 1) {
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
  getPostCategories () {
    const getPostCategoriesQuery = `
        SELECT post_category_id, name, description
        FROM live_updates.post_category
    `;
    return pool.query(getPostCategoriesQuery)
    .then(postCategories => {
        if (postCategories.rowCount !== 0) {
          return {
              code: postCategoriesRetrieved.code,
              message: postCategoriesRetrieved.message,
              categories: postCategories.rows,
            };
        }
        return {
            code: postCategoriesNotFound.code,
            message: postCategoriesNotFound.message
        };
      })
      .catch(error => {
        const errorMessage = `There was an error retrieving the post categories: ${error}`;
        logger.error(errorMessage);
        return { code: 400, message: errorMessage };
      });
  },
};

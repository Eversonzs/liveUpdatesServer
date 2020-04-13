const { isEmpty } = require('lodash');
const logger = require('../../../../logger')('controller-postCategory');
const { errorMissingName } = require('../../../helpers/responseCode/customizeResponseCode/postCategory');
const { createPostCategory } = require('../postgresql/postCategory');

module.exports = {
  createPostCategory (req, res) {
    const { name, description } = req.body;
    logger.debug('name - description', name, ' - ', description);
    if (isEmpty(name)) {
      logger.error(errorMissingName.message);
      return res.status(errorMissingName.code)
        .json({ code: errorMissingName.code, message: errorMissingName.message });
    }
    try {
        const postCategoryCreated = await createPostCategory(name, description);
        logger.debug('postCategoryCreated: ', postCategoryCreated);
        return res.status(postCategoryCreated.code)
          .json({ code: postCategoryCreated.code, message: postCategoryCreated.message });
    } catch (error) {
        logger.error(`There was an error: ${error}`);
        return res.status(400).json({ code: 400, message: error });
    }
  },
};
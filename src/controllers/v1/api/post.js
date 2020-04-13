const { isEmpty } = require('lodash');
const logger = require('../../../../logger')('controller-post');
const {
    errorMissingTitle,
    errorMissingPostCategoryId,
    errorMissingUserId,
    errorMissingDescription,
} = require('../../../helpers/responseCode/customizeResponseCode/post');
const { createPost } = require('../postgresql/post');

module.exports = {
  async createPost (req, res) {
    const {
        postCategoryId,
        userId,
        title,
        description,
        image,
    } = req.body;

    if (isEmpty(title)) {
      logger.error(errorMissingTitle.message);
      return res.status(errorMissingTitle.code)
        .json({ code: errorMissingTitle.code, message: errorMissingTitle.message });
    }
    if (isEmpty(description)) {
        logger.error(errorMissingDescription.message);
        return res.status(errorMissingDescription.code)
          .json({ code: errorMissingDescription, message: errorMissingDescription.message });
    }
    if (isEmpty(postCategoryId)) {
        logger.error(errorMissingPostCategoryId.message);
        return res.status(errorMissingPostCategoryId.code)
          .json({ code: errorMissingPostCategoryId.code, message: errorMissingPostCategoryId.message });
    }
    if (isEmpty(userId)) {
        logger.error(errorMissingUserId.message);
        return res.status(errorMissingUserId.code)
          .json({ code: errorMissingUserId.code, message: errorMissingUserId.message });
    }

    // TODO: add validation for required fields.

  },
};

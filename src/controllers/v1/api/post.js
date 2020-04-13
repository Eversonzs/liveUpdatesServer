const { isEmpty } = require('lodash');
const logger = require('../../../../logger')('controller-post');
const { errorMissingTitle } = require('../../../helpers/responseCode/customizeResponseCode/post');
const {  } = require('../postgresql/postCategory');

module.exports = {
  async createPost (req, res) {
    const {
        postCategoryId,
        userId,
        title,
        description,
        image,
        timestamp,
    } = req.body;

    if (isEmpty(title)) {
      logger.error(errorMissingTitle.message);
      return res.status(errorMissingTitle.code)
        .json({ code: errorMissingTitle.code, message: errorMissingTitle.message });
    }

    // TODO: add validation for required fields.
  },
};

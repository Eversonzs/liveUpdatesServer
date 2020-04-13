const { isEmpty, isNumber } = require('lodash');
const logger = require('../../../../logger')('controller-post');
const {
    errorMissingTitle,
    errorMissingPostCategoryId,
    errorMissingUserId,
    errorMissingDescription,
} = require('../../../helpers/responseCode/customizeResponseCode/post');
const { createPost, getPostsByCategoryId } = require('../postgresql/post');

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
    if (!isNumber(postCategoryId)) {
        logger.error(errorMissingPostCategoryId.message);
        return res.status(errorMissingPostCategoryId.code)
          .json({ code: errorMissingPostCategoryId.code, message: errorMissingPostCategoryId.message });
    }
    if (!isNumber(userId)) {
        logger.error(errorMissingUserId.message);
        return res.status(errorMissingUserId.code)
          .json({ code: errorMissingUserId.code, message: errorMissingUserId.message });
    }
    try {
        const postData = {
            postCategoryId,
            userId,
            title,
            description,
            image,
        };

        const postCreated = await createPost(postData);
        logger.info('postCreated: ', postCreated);
        return res.status(postCreated.code)
          .json({ code: postCreated.code, message: postCreated.message });
    } catch (error) {
      logger.error(`There was an error: ${error}`);
      return res.status(400).json({ code: 400, message: error });
    }
  },

  async getPostsByCategoryId (req, res) {
    const { postCategoryId } = req.params;
    logger.info('postCategoryId: ', postCategoryId);

    if (isEmpty(postCategoryId)) {
        logger.error(errorMissingPostCategoryId.message);
        return res.status(errorMissingPostCategoryId.code)
          .json({ code: errorMissingPostCategoryId.code, message: errorMissingPostCategoryId.message });
    }

    try {
        const posts = await getPostsByCategoryId(postCategoryId);
        if (posts.code !== 200) {
            logger.error(posts.message);
        }
        logger.info(posts.message);
        res.status(posts.code).json(posts);
    } catch (error) {
        logger.error(`There was an error: ${error}`);
        return res.status(400).json({ code: 400, message: error });
    }
  }
};

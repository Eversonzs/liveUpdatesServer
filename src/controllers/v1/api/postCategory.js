const { isEmpty } = require('lodash');
const logger = require('../../../../logger')('controller-postCategory');
const { errorMissingName } = require('../../../helpers/responseCode/customizeResponseCode/postCategory');

module.exports = {
  createCategory (req, res) {
    const { name, description } = req.body;
    logger.debug('name - description', name, ' - ', description);
    if (isEmpty(name)) {
      logger.error(errorMissingName.message);
      return res.status(errorMissingName.code)
        .json({ code: errorMissingName.code, message: errorMissingName.message });
    }

  },
};

const { isEmpty } = require('lodash');
const logger = require('../../../../logger')('controller-postCategory');
const { errorMissingName } = require('../../../helpers/responseCode/customizeResponseCode/postCategory');

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
        const userLogin = await getUserByEmail(email);
        let responseCode = userLogin.code || userFound.code;
        let responseMessage = userLogin.message || userFound.message;
        if (responseCode === 404) {
            return res.status(responseCode)
              .json({ code: responseCode, message: responseMessage });
        }

        // Compare if encrypted password match
        const passwordMatch = bcrypt.compareSync(password, userLogin.password);
        if (passwordMatch) {
          return res.status(responseCode)
            .json({ code: 200, message: responseMessage, user: userLogin });
        }

        return res.status(userUnauthorized.code)
          .json({ code: userUnauthorized.code, message: userUnauthorized.message });
    } catch (error) {
        logger.error(`Error retrieving user data: ${error}`);
        return res.status(400).json({ code: 400, message: error });
    }
  },
};

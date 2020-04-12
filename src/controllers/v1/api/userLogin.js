const logger = require('../../../../logger')('controller-userLogin');
const bcrypt = require("bcryptjs");

module.exports = {
  async userLogin (req, res) {
    const { username, password } = req.body;
    logger.info('username, password', username, password);
    try {
        const encryptedPassword = await bcrypt.hash(password, 8);
        logger.info('encryptedPassword', encryptedPassword);
    } catch (error) {
        logger.error('Error encrypting password.');
    }

    res.status(200).json({ message: 'Done', code: 200 });
  },
};

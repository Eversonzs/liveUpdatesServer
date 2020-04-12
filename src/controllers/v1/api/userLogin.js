const bcrypt = require('bcryptjs');
const logger = require('../../../../logger')('controller-userLogin');
const { getUserLogin } = require('../postgresql/user');

module.exports = {
  async userLogin (req, res) {
    const { email, password } = req.body;
    try {
        const encryptedPassword = await bcrypt.hash(password, 8);
        // TODO: change encrypted library.
        logger.debug('encryptedPassword-->', encryptedPassword)
        const userLogin = await getUserLogin(email, password);
        logger.debug('userLogin-->>', userLogin);
    } catch (error) {
        logger.error('Error encrypting password.');
    }

    res.status(200).json({ message: 'Done', code: 200 });
  },
};

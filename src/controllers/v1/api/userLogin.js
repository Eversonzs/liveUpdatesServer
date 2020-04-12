const bcrypt = require('bcryptjs');
const logger = require('../../../../logger')('controller-userLogin');
const { getUserByEmail } = require('../postgresql/user');

module.exports = {
  async userLogin (req, res) {
    const { email, password } = req.body;
    try {
        // Generate encrypt password to save on db (or receive it from FE)
        const salt = bcrypt.genSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(password, salt);
        
        const userLogin = await getUserByEmail(email);
        logger.debug('userLogin-->>', userLogin);
        // Compare if password match
        const passwordMatch = bcrypt.compareSync(password, userLogin.password);
        logger.debug('passwordMatch====>>>', passwordMatch);
    } catch (error) {
        logger.error(`Error retrieving user data: ${error}`);
    }
    res.status(200).json({ message: 'Done', code: 200 });
  },
};

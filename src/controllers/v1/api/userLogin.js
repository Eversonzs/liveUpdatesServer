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
        let responseCode = userLogin.code || 200;
        let responseMessage = userLogin.message || 'User found.'
        if (responseCode === 404) {
            res.status(responseCode).json({ code: responseCode, message: responseMessage });
        }
        logger.debug('userLogin-->>', userLogin);
        // Compare if password match
        const passwordMatch = bcrypt.compareSync(password, userLogin.password);
        logger.debug('passwordMatch====>>>', passwordMatch);
        // TODO: send response if user password does not match
        res.status(responseCode).json({ code: 200, message: responseMessage, user: userLogin });
    } catch (error) {
        logger.error(`Error retrieving user data: ${error}`);
    }
  },
};

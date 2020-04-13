const bcrypt = require('bcryptjs');
const { isEmpty } = require('lodash');
const logger = require('../../../../logger')('controller-user');
const { getUserByEmail, createUser } = require('../postgresql/user');
const {
  errorMissingEmail,
  errorMissingPassword,
  errorMissingUsername,
  errorMissingName,
  errorMissingLastName,
  userFound,
} = require('../../../helpers/responseCode/customizeResponseCode/user');

module.exports = {
  async userLogin (req, res) {
    const { email, password } = req.body;
    if (isEmpty(email)) {
      logger.error(errorMissingEmail.message);
      return res.status(errorMissingEmail.code)
        .json({ code: errorMissingEmail.code, message: errorMissingEmail.message });
    }
    if (isEmpty(password)) {
      logger.error(errorMissingPassword.message);
      return res.status(errorMissingPassword.code)
        .json({ code: errorMissingPassword.code, message: errorMissingPassword.message });
    }
    try {
        // Generate encrypt password to save on db (or receive it from FE)
        const salt = bcrypt.genSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(password, salt);
        
        const userLogin = await getUserByEmail(email);
        let responseCode = userLogin.code || userFound.code;
        let responseMessage = userLogin.message || userFound.message;
        if (responseCode === 404) {
            return res.status(responseCode).json({ code: responseCode, message: responseMessage });
        }
        logger.debug('userLogin-->>', userLogin);
        // Compare if password match
        const passwordMatch = bcrypt.compareSync(password, userLogin.password);
        logger.debug('passwordMatch====>>>', passwordMatch);
        // TODO: send response if user password does not match
        return res.status(responseCode).json({ code: 200, message: responseMessage, user: userLogin });
    } catch (error) {
        logger.error(`Error retrieving user data: ${error}`);
        return res.status(400).json({ code: 400, message: error });
    }
  },
  async createUser(req, res) {
    const {
      username,
      email,
      password,
      name,
      lastName,
      birthday,
      cellphone,
    } =  req.body;

    // Validate required fields received from FE.
    if (isEmpty(email)) {
      logger.error(errorMissingEmail.message);
      return res.status(errorMissingEmail.code)
        .json({ code: errorMissingEmail.code, message: errorMissingEmail.message });
    }
    if (isEmpty(password)) {
      logger.error(errorMissingPassword.message);
      return res.status(errorMissingPassword.code)
        .json({ code: errorMissingPassword.code, message: errorMissingPassword.message });
    }
    if (isEmpty(username)) {
      logger.error(errorMissingUsername.message);
      return res.status(errorMissingUsername.code)
        .json({ code: errorMissingUsername.code, message: errorMissingUsername.message });
    }
    if (isEmpty(name)) {
      logger.error(errorMissingName.message);
      return res.status(errorMissingName.code)
        .json({ code: errorMissingName.code, message: errorMissingName.message });
    }
    if (isEmpty(lastName)) {
      logger.error(errorMissingLastName.message);
      return res.status(errorMissingLastName.code)
        .json({ code: errorMissingLastName.code, message: errorMissingLastName.message });
    }

    const userData = {
      username,
      email,
      password,
      name,
      lastName,
      birthday,
      cellphone,
    };

    try {
      const userCreated = await createUser(userData);
      logger.debug('userCreated: ', userCreated);
      return res.status(userCreated.code).json({ code: userCreated.code, message: userCreated.message });
    } catch (error) {
      logger.error(`There was an error: ${error}`);
      return res.status(400).json({ code: 400, message: error });
    }
  },
};

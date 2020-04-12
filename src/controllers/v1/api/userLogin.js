const logger = require('../../../../logger')('controller-userLogin');

module.exports = {
  userLogin (req, res) {
    const { username, password } = req.body;
    logger.info('username, password', username, password);
    res.status(200).json({ message: 'Done', code: 200 });
  },
};

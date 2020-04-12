const log4js = require('log4js');
const SETTINGS = require('./settings');

module.exports = context => {
  const logger = log4js.getLogger(context);

  if (!context) {
    logger.warn('logger context name not set.');
  }

  logger.level = SETTINGS.LOGGER_LEVEL;
  return logger;
};

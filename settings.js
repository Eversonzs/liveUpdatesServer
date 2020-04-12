const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'development' || NODE_ENV === 'test') {
  require('dotenv').config();
}

module.exports = {
  APP_NAME: process.env.APP_NAME || 'liveupdatesserver',
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'production',
  DB_URI: process.env.DB_URI,
};

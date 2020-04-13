const { Pool } = require('pg');
const SETTINGS = require('../../../settings');
const logger = require('../../../logger')('postgresql-connection');

const pool = new Pool({
  connectionString: SETTINGS.POSTGRESQL_CONNECTION,
});

if (pool) {
  logger.info('Postgresql connected.');
}

module.exports = pool;

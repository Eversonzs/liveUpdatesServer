const { Pool } = require('pg');
const SETTINGS = require('../../../settings');

const pool = new Pool({
  connectionString: SETTINGS.POSTGRESQL_CONNECTION,
});

if (pool) {
  console.log('Postgresql connected.');
}

module.exports = pool;

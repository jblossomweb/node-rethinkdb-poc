require('node-env-file')(__dirname + '/.env');

module.exports = {
  rethink: {
    host: process.env.RETHINK_DB_HOST || 'localhost',
    port: process.env.RETHINK_DB_PORT || 28015
  }
};
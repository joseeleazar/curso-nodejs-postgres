require('dotenv').config();

module.exports = {
  development: {
    env: process.env.NODE_ENV || 'dev',
    dbUser: process.env.DB_USER,
    dbPassword:  process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dialect: 'postgres',
  },

};


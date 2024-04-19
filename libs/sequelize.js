const { Sequelize } = require('sequelize');

const  config = require('../config/config');
const setupModels = require('../db/models');

const USER = encodeURIComponent(config.development.dbUser);
const PASSWORD = encodeURIComponent(config.development.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.development.dbHost}:${config.development.dbPort}/${config.development.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log,
});

setupModels(sequelize);

module.exports =  sequelize ;


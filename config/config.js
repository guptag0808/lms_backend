
const { Sequelize } = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize(process.env.Database,process.env.user_name , process.env.Password, {
  host: process.env.Host,
  dialect: 'mysql',
});

module.exports = sequelize;

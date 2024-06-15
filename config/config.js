const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.Database, process.env.user_name, process.env.Password, {
  host: process.env.Host,
  dialect: 'mysql',
  port: process.env.SQL_PORT,
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;

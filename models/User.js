// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); // Adjust the path as necessary

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('student', 'teacher'),
    allowNull: false,
  },
});

module.exports = User;

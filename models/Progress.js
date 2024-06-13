const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Progress = sequelize.define('Progress', {
	status: {
		type: DataTypes.ENUM('Not Started', 'progress' , "Completed"),
		allowNull: false
	  }
});

module.exports = Progress;

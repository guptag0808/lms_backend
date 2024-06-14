const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');


const Progress = sequelize.define("Progress", {
    userId: {type: DataTypes.INTEGER,references: { model: 'Users',key: 'id'},allowNull: false},
    courseId: { type: DataTypes.INTEGER,references: {model: "Courses",key: 'id'}, allowNull: false},
	enroll: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	  },
	status: {
		type: DataTypes.ENUM('not started', 'progress', "completed"),
		allowNull: true,
	  },
});

module.exports = Progress;

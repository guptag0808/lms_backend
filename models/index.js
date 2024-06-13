const { Sequelize } = require('sequelize');
const config = require('../config/config.json').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const Course = require('./Course')(sequelize, Sequelize);

const User = require('./User')(sequelize, Sequelize);
const Lesson = require('./Lesson')(sequelize, Sequelize);
const Progress = require('./Progress')(sequelize, Sequelize);

// Define relationships
Course.hasMany(Lesson, { as: 'lessons' });
Lesson.belongsTo(Course);

User.belongsToMany(Course, { through: Progress });
Course.belongsToMany(User, { through: Progress });

module.exports = sequelize;
module.exports.models = {
  User,
  Course,
  Lesson,
  Progress
};

const User = require('./User')
const Course =require("./Course")
const Progress = require("./Progress");
const Lesson = require('./Lesson');




Progress.belongsTo(User, { foreignKey: 'userId' });
Progress.belongsTo(Course, { foreignKey: 'courseId' });


module.exports= {
	User,Course,Lesson,Progress
}

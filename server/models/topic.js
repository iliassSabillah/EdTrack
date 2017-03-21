"use strict";

module.exports = (sequelize, DataTypes) => {
	const Topic = sequelize.define("Topic", {
			name: {
				type: DataTypes.STRING
			}
		}, {
			classMethods: {
				associate: (models) => {
					Topic.belongsToMany(models.Student, {through: 'Student_Topic'});
					Topic.belongsToMany(models.Mentor, {through: 'Mentor_Topic'});
				}
			}
		}
	);
	return Topic;
};


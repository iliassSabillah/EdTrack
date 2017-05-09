"use strict";

module.exports = (sequelize, DataTypes) => {
	const Student = sequelize.define("Student", {
			name: {
				type: DataTypes.STRING,
				validate: {notEmpty: true}
			},
			img_path: {
				type: DataTypes.STRING
			},
			email: {
				type: DataTypes.STRING,
				validate: {isEmail: true, notEmpty:true}
			},
      password: {
        type: DataTypes.STRING,
        validate: {isEmail: true, notEmpty:true}
      }
		}, {
			classMethods: {
				associate: (models) => {
					Student.hasMany(models.Grade);
					Student.belongsToMany(models.Topic, {through: 'Student_Topic'});
				}
			}
		}
	);
	return Student;
};


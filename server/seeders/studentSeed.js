const models = require('../models');

const StudentSeedFunc = () => {
	//add the following students to the database:
	models.Student.sync({force: true})
		.then((data) =>
			models.Student.create({
				name: 'Iliass', email: 'Iliass@email.com',
			}))
		.then((student) =>
			student.addTopics([8,9,10]))

		.then((data) =>
			models.Student.create({
				name: 'Quan', email: 'Quan@email.com',
			}))
		.then((student) =>
			student.addTopics([2,4,10]))

		.then((data) =>
			models.Student.create({
				name: 'Jung', email: 'Jung@email.com',
			}))
		.then((student) =>
			student.addTopics([2,3,4]))

		.then((data) =>
			models.Student.create({
				name: 'Luis', email: 'Luis@email.com',
			}))

		.then((data) =>
			models.Student.create({
				name: 'John', email: 'John@email.com',
			}))

		.then((data) =>
			models.Student.create({
				name: 'Joe', email: 'Joe@email.com',
			}))

		.then((data) =>
			models.Student.create({
				name: 'Jack', email: 'Jack@email.com',
			}))
		.then((student) =>
			student.addTopics([2,6,9]))

		.then((data) =>
			models.Student.create({
				name: 'Kelly', email: 'Kelly@email.com',
			}))

		.then((data) =>
			models.Student.create({
				name: 'Tracy', email: 'Tracy@email.com',
			}))

		.then((data) =>
			models.Student.create({
				name: 'Jill', email: 'Jill@email.com',
			}));
};
StudentSeedFunc();
module.exports = StudentSeedFunc;

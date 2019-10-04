const users = require('../data/users.json');

module.exports = {
	hello: () => 'Hello World',
	now: () => new Date(),
	logged: () => {
		return {
			id: 1,
			name: 'Gilmar',
			age: 38,
			vip: false,
			email: 'professorgilmagro@gmail.com',
			salary: 20.4,
			profile_id: 3
		};
	},
	featuredProducts: () => {
		return {
			id: 1,
			name: 'Notebook Inspiron 14z',
			price: 1835.9,
			discount: 0.15
		};
	},
	userList() {
		return users;
	},
	getUser(_, args) {
		const results = users.filter(u => u.id === parseInt(args.id));
		return results ? results[0] : null;
	}
};

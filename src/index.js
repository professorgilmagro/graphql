// The GraphQL schema
const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const jsonUsers = require('./data/users.json');
const jsonProfiles = require('./data/user-levels.json');

// A map of functions which return data for the schema.
const resolvers = {
	Product: {
		saleValue: product => {
			if (product.discount) {
				return product.price * (1 - product.discount);
			}

			return product.price;
		}
	},

	User: {
		profile: user => {
			const results = jsonProfiles.filter(
				p => p.id === parseInt(user.profile_id)
			);
			return results ? results[0] : null;
		}
	},

	Query: {
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
			return jsonUsers;
		},
		getUser(_, args) {
			const results = jsonUsers.filter(u => u.id === parseInt(args.id));
			return results ? results[0] : null;
		}
	}
};

const server = new ApolloServer({
	typeDefs: importSchema(__dirname + '/schema/index.graphql'),
	resolvers
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});

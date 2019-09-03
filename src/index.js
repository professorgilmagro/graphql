// The GraphQL schema
const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const jsonUsers = require('./data/users.json');

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
				salary: 20.4
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
	typeDefs: importSchema('./schema/index.gql'),
	resolvers
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});

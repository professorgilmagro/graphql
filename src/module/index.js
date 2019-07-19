const { gql } = require('apollo-server-fastify');

// The GraphQL schema
const typeDefs = gql`
	type Query {
		hello: String
	}
`;

// A map of functions which return data for the schema.
const resolvers = {
	Query: {
		hello: () => 'Hello World'
	}
};

module.exports = {
	typeDefs,
	resolvers
};

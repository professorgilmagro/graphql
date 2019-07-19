const { ApolloServer, gql } = require('apollo-server');

// The GraphQL schema
const { typeDefs, resolvers } = require('./module');

const server = new ApolloServer({
	typeDefs,
	resolvers
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});

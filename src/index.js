// The GraphQL schema
const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers');

const server = new ApolloServer({
	typeDefs: importSchema(__dirname + '/schema/index.graphql'),
	resolvers
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});

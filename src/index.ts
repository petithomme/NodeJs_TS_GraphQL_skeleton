import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './resolvers/Books.js';
import { typeDefs } from './typeDefs/Book.js';

interface Context {
  authScope?: String;
}

// @ts-ignore
const server = new ApolloServer<Context>({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => ({
    authScope: req.headers.authorization
  })
});

console.log(`🚀  Server ready at: ${url}`);

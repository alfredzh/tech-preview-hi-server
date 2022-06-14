import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphql/types";
import { resolvers } from "./graphql/resolverS";

function startGraphQLServer() {
const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

export { startGraphQLServer };